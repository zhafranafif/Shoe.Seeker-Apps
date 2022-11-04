import { useMutation } from '@apollo/client'
import { deleteProductFromCart } from '../graphql/mutations'
import { getCartProduct } from '../graphql/query'

export const DeleteFromCart = () => {
    const [deleteItem, { loading: itemLoading }] = useMutation(deleteProductFromCart, {
        refetchQueries: [getCartProduct]
    })
    
    return {
        deleteItem,
        itemLoading
    }
}