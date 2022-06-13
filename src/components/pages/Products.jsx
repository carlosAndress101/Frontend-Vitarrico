import React from 'react'
import { useQuery } from "@apollo/client";
import { PRODUCTS} from '../query/Query';
import TablaProducts from '../sections/Tabla/TablaProducts';

const Products = () => {
    const {data, loading} = useQuery(PRODUCTS)
    console.log(data)
  return (
    <>
        {loading ? <p>Loading...</p> : <TablaProducts customs={data?.Products}/>}
    </>
  )
}

export default Products;
