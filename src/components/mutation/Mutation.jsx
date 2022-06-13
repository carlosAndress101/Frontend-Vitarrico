import { gql } from "@apollo/client";
//CLIENTE
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

//ORDENES

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

//PRODUCTOS

const CREATEPRODUCTS = gql`
  mutation CreateProducts($producto: CreateProducts) {
    createProducts(producto: $producto) {
      _id
      Imagen
      Name
      Ingredients
      Price
      Barcode
    }
  }
`;

const DELETEPRODUCTS = gql`
  mutation deleteProducts($producto: DeleteProducts) {
  deleteProducts(producto: $producto)
}
`;

export { MUTATIONCUSTOMER, CREATEORDER, DELETEORDER, CREATEPRODUCTS, DELETEPRODUCTS };

//revisar que esta funcionando bien.
