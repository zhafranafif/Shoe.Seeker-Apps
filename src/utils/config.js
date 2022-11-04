import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://tender-lobster-58.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret' : 'AYNXrI5UHuK7zLw1JqmdYIcOWFagUol8L1YLgjQsxQC2RfLBzGID49upIfHId3W6'
    }
})
export default client