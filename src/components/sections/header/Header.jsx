import "./Header.css";
import { useState } from "react";
import EmergenteCreate from '../Emergente/Emergente';

const Header = () => {
  const [CreateCustomerBtn, setCreateCustomerBtn] = useState(false);
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
              <button>Update</button>
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
    </>
  );
};

export default Header;
