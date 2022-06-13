import React from 'react'
import { useQuery } from "@apollo/client";
import { ORDERS } from '../query/Query'
import TablaOrders from '../sections/Tabla/TablaOrders';
import HeaderOrder from '../sections/header/HeaderOrder';

const Orders = () => {
  const {data, loading} = useQuery(ORDERS)
  return (
      <>
      <HeaderOrder/>
      {loading ? <p>Loading...</p> : <TablaOrders customs={data?.Orders}/>}
      </>
  )
}

export default Orders
