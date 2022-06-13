import './TablaOrders.css';


const TablaOrders = ({customs}) => {
  return (
    <>
      <table className="content-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NumberOfClient</th>
            <th>dataOfOrder</th>
          </tr>
        </thead>
        <tbody>
          {customs.map((o) => (
            <tr key={o._id} className="active-row">
              <td>{o._id}</td>
              <td>{o.NumberOfClient}</td>
              <td>{o.dataOfOrder}</td>     
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TablaOrders;
