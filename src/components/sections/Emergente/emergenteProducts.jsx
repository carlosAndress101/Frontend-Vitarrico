import React from 'react'
import './Emergente.css';
import { useState } from "react";
import {useMutation } from "@apollo/client";
import { BsXSquareFill } from "react-icons/bs";
import { CREATEPRODUCTS } from '../../mutation/Mutation';

const emergenteProducts = ({AbrirCreateProduct, setCerrarCreateProduct}) => {
    try {
        const [Imagen, setImagen] = useState("");
        const [Name, setName] = useState("");
        const [Ingredients, setIngredients] = useState("");
        const [Price, setPrice] = useState("");
        const [Barcode, setBarcode] = useState("");
    
        const [CreateProducts] = useMutation(CREATEPRODUCTS);
    
        const handleSubmit = e =>{
            e.preventDefault();
            CreateProducts({variables: { producto: {Imagen:Imagen, Name:Name, Ingredients:Ingredients, Price:Price, Barcode:Barcode}}})
            
            setImagen('')
            setName('')
            setIngredients('')
            setPrice('')
            setBarcode('')
          }
        return (
            <>
            {AbrirCreateProduct && (
              <div className="overLay">
                <div className="popup">
                  <a className="btn_cerrar_popup" href="#">
                    <i
                      className="material_Icons"
                      onClick={() => setCerrarCreateProduct(false)}
                    >
                      {<BsXSquareFill />}
                    </i>
                  </a>
                  <h2>Create Products </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="contenedor-inputs">
    
                      <input type="text"
                       placeholder="Imagen product"
                        value={Imagen} 
                        onChange={(evt) => setImagen(evt.target.value)} />

                      <input type="text"
                       placeholder="Name"
                        value={Name} 
                        onChange={(evt) =>  setName(evt.target.value)} />
                        
                      <input type="text"
                       placeholder="Ingredients"
                        value={Ingredients} 
                        onChange={(evt) => setIngredients(evt.target.value)} />

                      <input type="text"
                       placeholder="Price"
                        value={Price} 
                        onChange={(evt) => setPrice(evt.target.value)} />

                      <input type="text"
                       placeholder="Barcodet"
                        value={Barcode} 
                        onChange={(evt) => setBarcode(evt.target.value)} />
                    </div>
                    <button>Create Products</button>
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

export default emergenteProducts