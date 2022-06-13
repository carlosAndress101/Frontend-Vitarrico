// import React from "react";
// import "./Emergente.css";
// import { BsXSquareFill } from "react-icons/bs";
// import { useState } from "react";
// import {useMutation } from "@apollo/client";
// import {UPDATECUSTOMER} from '../../mutation/Mutation';
// import { QUERY_CUSTOMERID } from "../../query/Query";


// const UpdateCustom = ({ abrirUpdate, cerrarUpdate, customer}) => {
//   try {

//     const [_id, set_id] = useState(customer._id);
//     const [Name, setName] = useState(customer.Name);
//     const [Lastname, setLastname] = useState(customer.Lastname);
//     const [Age, setAge] = useState(customer.Age);
//     const [Phonenumber, setPhonenumber] = useState(customer.Phonenumber);
//     const [Email, setEmail] = useState(customer.Email);
//     const [city, setcity] = useState(customer.city);

//     const [updateCustomers] = useMutation(UPDATECUSTOMER, {
//       variables:{_id: customer._id, Name, Lastname, Age, Phonenumber, Email, city},
//       //quede aqui falta agregrar otras cosas revisar bien.
//       refetchQueries:[{query: QUERY_CUSTOMERID, variables:{_id:customer._id}}],
//     });

//     const handleSubmit = (e) => {
//       e.preventDefault();

//       if(!_id || Name || Lastname || Age || Phonenumber || Email || city){
//         return alert('OK');
//       }

//       updateCustomers(_id, Name, Lastname, Age, Phonenumber, Email, city);
//     };
//     return (
//       <>
//         {abrirUpdate && (
//           <div className="overLay">
//             <div className="popup">
//               <a className="btn_cerrar_popup" href="#">
//                 <i
//                   className="material_Icons"
//                   onClick={() => cerrarUpdate(false)}>{<BsXSquareFill />}
//                 </i>
//               </a>
//               <h2>Update Customer </h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="contenedor-inputs">
//                   <input
//                     type="text"
//                     required
//                     placeholder="ID"
//                     value={_id}
//                     onChange={(evt) => set_id(evt.target.value)}
//                   />
//                   <input
//                     type="text"
//                     placeholder="Name"
//                     value={Name}
//                     onChange={(evt) => setName(evt.target.value)}
//                   />
//                   <input
//                     type="text"
//                     placeholder="Lastname"
//                     value={Lastname}
//                     onChange={(evt) => setLastname(evt.target.value)}
//                   />
//                   <input
//                     type="number"
//                     placeholder="Age"
//                     value={Age}
//                     onChange={(evt) => setAge(evt.target.value)}
//                   />
//                   <input
//                     type="text"
//                     placeholder="Phone number"
//                     value={Phonenumber}
//                     onChange={(evt) => setPhonenumber(evt.target.value)}
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     value={Email}
//                     onChange={(evt) => setEmail(evt.target.value)}
//                   />
//                   <input
//                     type="text"
//                     placeholder="City"
//                     value={city}
//                     onChange={(evt) => setcity(evt.target.value)}
//                   />
//                 </div>
//                 <button type="submit">Update Customer</button>
//               </form>
//             </div>
//           </div>
//         )}
//       </>
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default UpdateCustom;
