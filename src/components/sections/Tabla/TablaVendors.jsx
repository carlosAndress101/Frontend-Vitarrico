import './TablaOrders.css';

import React from 'react'

const TablaVendors = ({vendrs}) => {
  return (
    <>
    <table className="content-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>LASTNAME</th>
          <th>PHONENUMBER</th>
          <th>NAMEOFCOMPANY</th>
          <th>SALES</th>
        </tr>
      </thead>
      <tbody>
        {vendrs.map((v) => (
          <tr key={v._id} className="active-row">
            <td>{v._id}</td>
            <td>{v.Name}</td>    
            <td>{v.Lastname}</td>    
            <td>{v.PhoneNumber}</td>    
            <td>{v.NameOfCompany}</td>    
            <td>{v.Sales}</td>    
          </tr>
        ))}
      </tbody>
    </table>
  </>
  )
}

export default TablaVendors