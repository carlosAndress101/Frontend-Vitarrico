import "./Emergente.css";
import { BsXSquareFill } from "react-icons/bs";
import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const DELETEMUTATION = gql`
  mutation Mutation($customer: DeleteCustomer) {
    deleteCustomer(customer: $customer)
  }
`;

const DeleteEmergente = ({ deletebtn, setDeletebtn }) => {
  try {
    const [_id, set_id] = useState("");
    const [deleteCustomer] = useMutation(DELETEMUTATION);

    const handleSubmit = (e) => {
      e.preventDefault();
      deleteCustomer({ variables: { customer: { _id: _id } } });

      set_id("");
    };

    return (
      <>
        {deletebtn && (
          <div className="overLay">
            <div className="popup">
              <a className="btn_cerrar_popup" href="#">
                <i
                  className="material_Icons"
                  onClick={() => setDeletebtn(false)}
                >
                  {<BsXSquareFill />}
                </i>
              </a>
              <h2>Delete Customer </h2>
              <form onSubmit={handleSubmit}>
                <div className="contenedor-inputs">
                  <input
                    type="text"
                    placeholder="Digite el ID"
                    value={_id}
                    onChange={(evt) => set_id(evt.target.value)}
                  />
                </div>
                <button> Delete </button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  } catch (error) {
    console.log(error);
  }
};

export default DeleteEmergente;
