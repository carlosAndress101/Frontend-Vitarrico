import "./Emergente.css";
import { BsXSquareFill } from "react-icons/bs";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const MUTATIONCUSTOMER = gql`
  mutation createCustomer($customer: CreateCustomer) {
    createCustomer(customer: $customer) {
      _id
      Name
      Lastname
      Age
      Phonenumber
      Email
      password
      city
    }
  }
`;

const CreateCustomer = ({ CreateCustomerBtn, setCreateCustomerBtn }) => {
  try {
    const [Name, setName] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Age, setAge] = useState("")
    const [Phonenumber, setPhonenumber] = useState("");
    const [Email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [city, setcity] = useState("");

    const [createCustomer] = useMutation(MUTATIONCUSTOMER);

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
        {CreateCustomerBtn && (
          <div className="overLay">
            <div className="popup">
              <a className="btn_cerrar_popup" href="#">
                <i
                  className="material_Icons"
                  onClick={() => setCreateCustomerBtn(false)}
                >
                  {<BsXSquareFill />}
                </i>
              </a>
              <h2>Create Customer </h2>
              <form onSubmit={handleSubmit}>
                <div className="contenedor-inputs">
                  <input type="text" placeholder="Name" value={Name} onChange={(evt) => setName(evt.target.value)} />
                  <input type="text" placeholder="Lastname" value={Lastname} onChange={(evt) => setLastname(evt.target.value)} />
                  <input type="number" placeholder="Age" value={Age} onChange={(evt) => setAge(evt.target.value)} />
                  <input type="text" placeholder="Phone number" value={Phonenumber} onChange={(evt)=> setPhonenumber(evt.target.value)} />
                  <input type="email" placeholder="Email" value={Email} onChange={(evt) => setEmail(evt.target.value)} />
                  <input type="password" placeholder="Password" value={password} onChange={(evt) => setpassword(evt.target.value)} />
                  <input type="text" placeholder="City" value={city} onChange={(evt) => setcity(evt.target.value)} />
                </div>
                <button>Create Customer</button>
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

export default CreateCustomer;
