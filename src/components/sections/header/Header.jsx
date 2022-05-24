import "./Header.css";
import { useState } from "react";
import EmergenteCreate from "../Emergente/Emergente";
import EmergenteUpdate from "../Emergente/UpdateCustom";
import DeleteEmergente from "../Emergente/DeleteEmergente";

const Header = () => {
  const [CreateCustomerBtn, setCreateCustomerBtn] = useState(false);
  const [UpdateCustomerBtn, setUpdateCustomerBtn] = useState(false);
  const [deletebtn, setDeletebtn] = useState(false);
  return (
    <>
      <header>
        <img className="logo" alt="logo" />
        <nav className="nav__links">
          <ul>
            <li>
              <button onClick={() => setCreateCustomerBtn(!CreateCustomerBtn)}>
                Crear
              </button>
            </li>
            <li>
              <button onClick={() => setUpdateCustomerBtn(!UpdateCustomerBtn)}>
                Update
              </button>
            </li>
            <li>
              <button onClick={() => setDeletebtn(!deletebtn)}>Delete</button>
            </li>
          </ul>
        </nav>
      </header>
      <EmergenteCreate
        CreateCustomerBtn={CreateCustomerBtn}
        setCreateCustomerBtn={setCreateCustomerBtn}
      />
      <EmergenteUpdate
        UpdateCustomerBtn={UpdateCustomerBtn}
        setUpdateCustomerBtn={setUpdateCustomerBtn}
      />
      <DeleteEmergente deletebtn={deletebtn} setDeletebtn={setDeletebtn} />
    </>
  );
};

export default Header;
