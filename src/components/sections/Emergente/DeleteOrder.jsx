import "./Emergente.css";
import { BsXSquareFill } from "react-icons/bs";
import React, { useState } from "react";
import {useMutation } from "@apollo/client";
import {DELETEORDER} from '../../mutation/Mutation';

const DeleteOrder = ({abrirDelete, setCerrarDelete}) => {
  try {
    const [_id, set_id] = useState("");
    const [deleteOrder] = useMutation(DELETEORDER);

    const handleSubmit = (e) => {
      e.preventDefault();
      deleteOrder({ variables: { order: { _id: _id } } });
      set_id("");
    };

    return (
      <>
        {abrirDelete && (
          <div className="overLay">
            <div className="popup">
              <a className="btn_cerrar_popup" href="#">
                <i
                  className="material_Icons"
                  onClick={() => setCerrarDelete(false)}
                >
                  {<BsXSquareFill />}
                </i>
              </a>
              <h2>Delete Order </h2>
              <form onSubmit={handleSubmit}>
                <div className="contenedor-inputs">
                  <input
                    type="text"
                    placeholder="Digite el ID"
                    value={_id}
                    onChange={(evt) => set_id(evt.target.value)}
                  />
                </div>
                <button> Delete Order </button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  } catch (error) {
    console.log(error)
  }
};

export default DeleteOrder