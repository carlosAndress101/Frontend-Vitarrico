import React from 'react'
import './Emergente.css';
import { BsXSquareFill } from "react-icons/bs";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const UPDATECUSTOMER = gql`
mutation updateCustomers($customer: UpdateCustomer) {
  updateCustomer(customer: $customer) {
    _id
    Name
    Lastname
    Age
    Phonenumber
    Email
    city
  }
}
`;

const UpdateCustom = ({UpdateCustomerBtn, setUpdateCustomerBtn}) => {
    try {
        const [_id, set_id] = useState("");
        const [Name, setName] = useState("");
        const [Lastname, setLastname] = useState("");
        const [Age, setAge] = useState("")
        const [Phonenumber, setPhonenumber] = useState("");
        const [Email, setEmail] = useState("");
        const [city, setcity] = useState("");
    
        const [updateCustomers] = useMutation(UPDATECUSTOMER);
    
        const handleSubmit = e =>{
            e.preventDefault();
            createCustomer({variables: { customer: {Name:Name, Lastname:Lastname, Age:Age, Phonenumber:Phonenumber, Email:Email, password:password, city:city}}})
            
            setName('')
            setLastname('')
            setAge('')
            setPhonenumber('')
            setEmail('')
            setpassword('')
            setcity('')
          }
        return (
          <>
            {UpdateCustomerBtn && (
              <div className="overLay">
                <div className="popup">
                  <a className="btn_cerrar_popup" href="#">
                    <i
                      className="material_Icons"
                      onClick={() => setUpdateCustomerBtn(false)}
                    >
                      {<BsXSquareFill />}
                    </i>
                  </a>
                  <h2>Update Customer </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="contenedor-inputs">
                        <input type="text" required placeholder="write the id to update" value={_id} onChange={(evt)=> set_id(evt.target.value)} />
                      <input type="text" placeholder="Name" value={Name} onChange={(evt) => setName(evt.target.value)} />
                      <input type="text" placeholder="Lastname" value={Lastname} onChange={(evt) => setLastname(evt.target.value)} />
                      <input type="number" placeholder="Age" value={Age} onChange={(evt) => setAge(evt.target.value)} />
                      <input type="text" placeholder="Phone number" value={Phonenumber} onChange={(evt) => setPhonenumber(evt.target.value)} />
                      <input type="email" placeholder="Email" value={Email} onChange={(evt) => setEmail(evt.target.value)} />
                      <input type="text" placeholder="City" value={city} onChange={(evt) => setcity(evt.target.value)} />
                    </div>
                    <button>Update Customer</button>
                  </form>
                </div>
              </div>
            )}
          </>
        );
      } catch (error) {
        console.log(error);
      }
}

export default UpdateCustom
