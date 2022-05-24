import "./Header.css";
import { useState } from "react";
import EmergenteCreate from '../Emergente/Emergente';
import EmergenteUpdate from '../Emergente/UpdateCustom';

const Header = () => {
  const [CreateCustomerBtn, setCreateCustomerBtn] = useState(false);
  const [UpdateCustomerBtn, setUpdateCustomerBtn] = useState(false);
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
              <button onClick={()=> setUpdateCustomerBtn(!UpdateCustomerBtn)}>Update</button>
            </li>
            <li>
              <button>Delete</button>
            </li>
          </ul>
        </nav>
      </header>
      <EmergenteCreate
        CreateCustomerBtn={CreateCustomerBtn}
        setCreateCustomerBtn={setCreateCustomerBtn}
      />
      <EmergenteUpdate UpdateCustomerBtn={UpdateCustomerBtn}
        setUpdateCustomerBtn={setUpdateCustomerBtn}
      />
    </>
  );
};

export default Header;
