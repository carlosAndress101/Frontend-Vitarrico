import React from "react";
import { useQuery} from "@apollo/client";
import { DVENDORS } from "../query/Query";
import TablaVendors from "../sections/Tabla/TablaVendors";



const Vendors = () => {
  const { data, loading } = useQuery(DVENDORS);

  return (
    <>
      {loading ? <p>Loading</p> : <TablaVendors vendrs={data?.DVendors} />}
    </>
  );
};

export default Vendors;
