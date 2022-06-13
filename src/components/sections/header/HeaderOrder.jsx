import React from 'react';
import './Header.css';
import { useState } from "react";
import EmergenteOrder from '../Emergente/emergenteOrder';
import DeleteOrder from '../Emergente/DeleteOrder';
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { RiDeleteBin4Fill } from "react-icons/ri";


const HeaderOrder = () => {
    const [AbrirCreateOrder, setCerrarCreateOrder]= useState(false)
    const [abrirDelete, setCerrarDelete]= useState(false)
  return (
    <>
      <header>
        <img className="logo" alt="logo" />
        <nav className="nav__links">
          <ul>
            <li>
              <button onClick={() => setCerrarCreateOrder(!AbrirCreateOrder)}>{<BsFileEarmarkPersonFill/>}</button>
            </li>
            <li>
              <button onClick={() => setCerrarDelete(!abrirDelete)}>{<RiDeleteBin4Fill/>}</button>
            </li>
          </ul>
        </nav>
      </header>
      <EmergenteOrder 
      AbrirCreateOrder={AbrirCreateOrder} 
      setCerrarCreateOrder={setCerrarCreateOrder}/>

      <DeleteOrder 
      abrirDelete={abrirDelete} 
      setCerrarDelete={setCerrarDelete}/>
    </>
  )
}

export default HeaderOrder