import React from 'react'
import './Header.css';
import { useState } from "react";
import EmergenteProducts from '../Emergente/emergenteProducts';
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { RiDeleteBin4Fill } from "react-icons/ri";
import DeleteProducts from '../Emergente/DeleteProducts';

const HeaderProducts = () => {
    const [AbrirCreateProduct, setCerrarCreateProduct]= useState(false)
    const [abrirDelete, setCerrarDelete]= useState(false)
  return (
    <>
      <header>
        <img className="logo" alt="logo" />
        <nav className="nav__links">
          <ul>
            <li>
              <button onClick={() => setCerrarCreateProduct(!AbrirCreateProduct)}>{<BsFileEarmarkPersonFill/>}</button>
            </li>
            <li>
              <button onClick={() => setCerrarDelete(!abrirDelete)}>{<RiDeleteBin4Fill/>}</button>
            </li>
          </ul>
        </nav>
      </header>
      <EmergenteProducts 
      AbrirCreateProduct={AbrirCreateProduct} 
      setCerrarCreateProduct={setCerrarCreateProduct}/>

      <DeleteProducts 
      abrirDelete={abrirDelete} 
      setCerrarDelete={setCerrarDelete}/>
    </>
  )
}

export default HeaderProducts