import { gql } from "@apollo/client";

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

const ORDERS = gql`
  query Order {
    Orders {
      _id
      NumberOfClient
      dataOfOrder
    }
  }
`;

const PRODUCTS = gql`
  query Products {
    Products {
      _id
      Name
      Ingredients
      Price
      Barcode
    }
  }
`;

const PROVIDERS = gql`
  query Providers {
    Providers {
      _id
      Name
      Phonenumber
      city
      Direction
    }
  }
`;
const DVENDORS = gql`
  query DVendors {
    DVendors {
      _id
      Name
      Lastname
      PhoneNumber
      NameOfCompany
      Sales
    }
  }
`;
export { QUERY_CUSTOMER, QUERY_CUSTOMERID, ORDERS, PRODUCTS, PROVIDERS, DVENDORS };
