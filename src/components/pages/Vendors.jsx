// import React from "react";
// import { useQuery, gql } from "@apollo/client";
// import TablaVendors from "../sections/Vendors/TablaVendors";
// import HeaderVendors from "../sections/Vendors/HeaderVendors";

// const QUERY_VENDORS = gql`
//   query Query {
//     DVendors {
//       _id
//       Name
//       Lastname
//       PhoneNumber
//       NameOfCompany
//       Sales
//     }
//   }
// `;

// const Vendors = () => {
//   const { data, error, loading } = useQuery(QUERY_VENDORS);

//   return (
//     <>
//       <HeaderVendors/>
//       {loading ? <p>Loading</p> : <TablaVendors vendrs={data?.DVendors} />}
//     </>
//   );
// };

// export default Vendors;
