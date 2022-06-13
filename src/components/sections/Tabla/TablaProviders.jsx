import React from 'react'

const TablaProviders = ({customs}) => {
  return (
    <>
    <table className="content-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>PHONENUMBER</th>
          <th>CITY</th>
          <th>DIRECTION</th>
        </tr>
      </thead>
      <tbody>
        {customs.map((p) => (
          <tr key={p._id} className="active-row">
            <td>{p._id}</td>
            <td>{p.Name}</td>    
            <td>{p.Phonenumber}</td>    
            <td>{p.city}</td>    
            <td>{p.Direction}</td>    
          </tr>
        ))}
      </tbody>
    </table>
  </>
  )
}

export default TablaProviders
