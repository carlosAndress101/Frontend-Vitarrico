import { useQuery} from "@apollo/client";
import Tablas from "../sections/Tabla/Tabla";
import Header from "../sections/header/Header";
import { QUERY_CUSTOMER } from "../query/Query";


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
