import { gql } from '@apollo/client';

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

//crear metodo en el backend para traer por id
const QUERY_CUSTOMERID = gql`
  query filId($filter: FilterCustomer) {
  customers(filter: $filter) {
    _id
    Name
    Lastname
    Age
    Phonenumber
    Email
    city
  }
}
`;

export {QUERY_CUSTOMER, QUERY_CUSTOMERID}