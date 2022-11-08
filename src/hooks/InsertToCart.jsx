import { useMutation } from "@apollo/client"
import { insertProductToCart } from "../graphql/mutations"
import { getQuantityLength } from "../graphql/query"

export const AddProductToCart = () => {
    const [insertToCart, { loading: insertLoading }] = useMutation(insertProductToCart, {
        refetchQueries: [getQuantityLength]
    })
    
    return {
        insertToCart,
        insertLoading
    }
}
