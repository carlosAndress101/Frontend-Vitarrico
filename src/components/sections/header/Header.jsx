import "./Header.css";
import { useState } from "react";
import EmergenteCreate from "../Emergente/Emergente";
import { BsFileEarmarkPersonFill } from "react-icons/bs";

const Header = () => {
  const [CreateCustomerBtn, setCreateCustomerBtn] = useState(false);

  return (
    <>
      <header>
        <img className="logo" alt="logo" />
        <nav className="nav__links">
          <ul>
            <li>
              <button onClick={() => setCreateCustomerBtn(!CreateCustomerBtn)}>{<BsFileEarmarkPersonFill/>}</button>
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
