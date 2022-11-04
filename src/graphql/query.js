import { gql } from "@apollo/client";

export const getAllUpcomingShoes = gql`
query MyQuery {
    shoeseeker_upcoming_release {
      id
      imagerelease
      shoesrelease
    }
  }
  
`
export const getAllProduct = gql`
query MyQuery {
  shoeseeker_v2_product {
    id
    product_desc
    product_image
    product_price
    product_name
    product_qty
    product_type
  }
}
`

export const getProductByName = gql`
query MyQuery($product_name : String!){
  shoeseeker_v2_product(where: {product_name: {_eq: $product_name}}) {
    id
    product_desc
    product_image
    product_price
    product_name
    product_qty
    product_type
  }
}
`

export const getProductById = gql`
query MyQuery($id: Int!) {
  shoeseeker_v2_product(where: {id: {_eq: $id}}) {
    product_image
    product_name
    product_price
    product_qty
    id
  }
}
`
export const getCartProduct = gql`
query MyQuery {
  shoeseeker_v2_cart {
    id
    product_id
    cart_product {
      id
      product_image
      product_name
      product_price
      product_qty
    }
  }
}
`
export const getQuantityLength = gql`
query MyQuery {
  shoeseeker_v2_cart {
    id
    product_id
    cart_product {
      product_qty
    }
  }
}

`