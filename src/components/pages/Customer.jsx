import { useQuery, gql } from "@apollo/client";
import Tablas from "../sections/Tabla/Tabla";
import Header from "../sections/header/Header";

const QUERY_CUSTOMER = gql`
  query {
    customers {
      _id
      Name
      Lastname
      Age
      Phonenumber
      Email
      password
      city
    }
  }
`;
const CUSTOMER = () => {
  const { data, error, loading } = useQuery(QUERY_CUSTOMER);
  return (
    <>
      <Header/>
      {loading ? <p>Loading... </p> : <Tablas customs={data?.customers} />}
    </>
  );
};
export default CUSTOMER;
