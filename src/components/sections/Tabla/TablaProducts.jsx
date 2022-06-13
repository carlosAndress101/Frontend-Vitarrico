import React from 'react'
import './TablaOrders';

const TablaProducts = ({customs}) => {
  return (
    <>
    <table className="content-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>IMAGEN</th>
          <th>NAME</th>
          <th>INGREDIENTS</th>
          <th>PRICE</th>
          <th>BARCODE</th>
        </tr>
      </thead>
      <tbody>
        {customs.map((P) => (
          <tr key={P._id} className="active-row">
            <td>{P._id}</td>
            <td>{P.Imagen}</td>    
            <td>{P.Name}</td>    
            <td>{P.Ingredients}</td>    
            <td>{P.Price}</td>    
            <td>{P.Barcode}</td>    
          </tr>
        ))}
      </tbody>
    </table>
  </>
  )
}

export default TablaProducts