import React from 'react'
import { BsXSquareFill } from "react-icons/bs";
import {useMutation } from "@apollo/client";
import { useState } from "react";
import { DELETEPRODUCTS } from '../../mutation/Mutation';

const DeleteProducts = ({abrirDelete, setCerrarDelete}) => {
    try {
        const [_id, set_id] = useState("");
        const [deleteProducts] = useMutation(DELETEPRODUCTS);
    
        const handleSubmit = (e) => {
          e.preventDefault();
          deleteProducts({ variables: { producto: { _id: _id } } });
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
                  <h2>Delete Products </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="contenedor-inputs">
                      <input
                        type="text"
                        placeholder="Digite el ID"
                        value={_id}
                        onChange={(evt) => set_id(evt.target.value)}
                      />
                    </div>
                    <button> Delete Products </button>
                  </form>
                </div>
              </div>
            )}
          </>
        );
      } catch (error) {
        console.log(error)
      }
    }

export default DeleteProducts