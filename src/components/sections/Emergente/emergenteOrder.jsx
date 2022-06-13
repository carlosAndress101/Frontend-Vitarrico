import './Emergente.css';
import { useState } from "react";
import {useMutation } from "@apollo/client";
import { BsXSquareFill } from "react-icons/bs";
import { CREATEORDER } from '../../mutation/Mutation';

const emergenteOrder = ({AbrirCreateOrder, setCerrarCreateOrder}) => {
  try {
    
    const [NumberOfClient, setNumberOfClient] = useState("");
    const [dataOfOrder, setDataOfOrder] = useState("");

    const [createOrder] = useMutation(CREATEORDER);

    const handleSubmit = e =>{
        e.preventDefault();
        createOrder({variables: { order: {NumberOfClient:NumberOfClient, dataOfOrder:dataOfOrder}}})
        
        setNumberOfClient('')
        setDataOfOrder('')
      }
    return (
        <>
        {AbrirCreateOrder && (
          <div className="overLay">
            <div className="popup">
              <a className="btn_cerrar_popup" href="#">
                <i
                  className="material_Icons"
                  onClick={() => setCerrarCreateOrder(false)}
                >
                  {<BsXSquareFill />}
                </i>
              </a>
              <h2>Create Order </h2>
              <form onSubmit={handleSubmit}>
                <div className="contenedor-inputs">
                  <input type="text"
                   placeholder="NumberOfClient" 
                   value={NumberOfClient}
                    onChange={(evt) => setNumberOfClient(evt.target.value)} />

                  <input type="text"
                   placeholder="dataOfOrder"
                    value={dataOfOrder} 
                    onChange={(evt) => setDataOfOrder(evt.target.value)} />
                </div>
                <button>Create Order</button>
              </form>
            </div>
          </div>
        )}
      </>
    
        )
  } catch (error) {
    console.log(error)
  }
}

export default emergenteOrder