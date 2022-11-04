import { gql } from "@apollo/client"

export const insertProductToCart = gql`
mutation MyMutation($id: Int!, $product_image: String, $product_name: String, $product_price: money, $product_qty: Int, $update_columns: [shoeseeker_v2_product_update_column!] = id, $product_desc: String, $product_type: String) {
    insert_shoeseeker_v2_cart_one(object: {cart_product: {data: {id: $id, product_image: $product_image, product_name: $product_name, product_price: $product_price, product_qty: $product_qty, product_desc: $product_desc, product_type: $product_type}, on_conflict: {constraint: product_pkey, update_columns: $update_columns}}}) {
      id
      product_id
      cart_product {
        id
        product_image
        product_name
        product_price
        product_qty
        product_desc
      }
    }
  }
`

export const deleteProductFromCart = gql`
mutation MyMutation($id: Int!) {
    delete_shoeseeker_v2_cart(where: {id: {_eq: $id}}) {
      returning {
        id
      }
    }
  }
  
`