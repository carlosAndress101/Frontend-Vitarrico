import { gql } from "@apollo/client";

const UPDATECUSTOMER = gql`
mutation updateCustomers($customer: UpdateCustomer) {
  updateCustomer(customer: $customer) {
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

export {UPDATECUSTOMER};

//revisar que esta funcionando bien.