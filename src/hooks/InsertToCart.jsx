import { useMutation } from "@apollo/client"
import { insertProductToCart } from "../graphql/mutations"
import { getProductByName } from "../graphql/query"

export const AddProductToCart = () => {
    const [insertToCart, { loading: insertLoading }] = useMutation(insertProductToCart, {
        awaitRefetchQueries: [getProductByName]
    })
    
    return {
        insertToCart,
        insertLoading
    }
}
