
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { useState } from "react";
import DeleteEmergente from "../Emergente/DeleteEmergente";
import UpdateCustom from "../Emergente/update";


const Tablas = ({ customs }) => {
  const [deletebtn, setDeletebtn] = useState(false);
  const [abrirUpdate, cerrarUpdate] = useState(false);
  return (
    <>
      <table className="content-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>PhoneNumber</th>
            <th>Email</th>
            <th>Password</th>
            <th>City</th>
            <th>edit</th>
            <th>del</th>
          </tr>
        </thead>
        <tbody>
          {customs.map((c) => (
            <tr key={c._id} className="active-row">
              <td>{c._id}</td>
              <td>{c.Name}</td>
              <td>{c.Lastname}</td>
              <td>{c.Age}</td>
              <td>{c.Lastname}</td>
              <td>{c.Email}</td>
              <td>{c.password}</td>
              <td>{c.city}</td>
              <td>
                <button onClick={() => cerrarUpdate(!abrirUpdate)}>{<VscEdit />}</button>
              </td>
              <td>
                <button onClick={() => setDeletebtn(!deletebtn)}>
                  {<RiDeleteBin4Fill />}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UpdateCustom abrirUpdate={abrirUpdate} cerrarUpdate={cerrarUpdate}/>
      <DeleteEmergente deletebtn={deletebtn} setDeletebtn={setDeletebtn} />
    </>
  );
};

export default Tablas;
