import { gql } from "@apollo/client";

const MUTATIONCUSTOMER = gql`
  mutation createCustomer($customer: CreateCustomer) {
    createCustomer(customer: $customer) {
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

const CREATEORDER = gql`
mutation CreateOrder($order: CreateOrder) {
  createOrder(order: $order) {
    NumberOfClient
    dataOfOrder
  }
}
`;

const DELETEORDER = gql`
mutation deleteOrder($order: DeleteOrder) {
  deleteOrder(order: $order)
}
`;

export {MUTATIONCUSTOMER, CREATEORDER, DELETEORDER};

//revisar que esta funcionando bien.