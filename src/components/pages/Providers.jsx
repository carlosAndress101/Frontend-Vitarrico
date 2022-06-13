import React from 'react'
import { useQuery } from "@apollo/client";
import { PROVIDERS} from '../query/Query';
import TablaProviders from '../sections/Tabla/TablaProviders';

const Providers = () => {
  const {data, loading} = useQuery(PROVIDERS)
  return ( 
    <>
    {loading ? <p>Loading...</p> : <TablaProviders customs={data?.Providers}/>}
    </>
  )
}

export default Providers
