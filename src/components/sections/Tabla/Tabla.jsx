import "./Tabla.css";
const Tablas = ({ customs }) => {
  return (
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
        </tr>
      </thead>
      <tbody>
        {customs.map((c) => (
          <tr key={c._id} className="active-row" >
            <td>{c._id}</td>
            <td>{c.Name}</td>
            <td>{c.Lastname}</td>
            <td>{c.Age}</td>
            <td>{c.Phonenumber}</td>
            <td>{c.Email}</td>
            <td>{c.password}</td>
            <td>{c.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tablas;
