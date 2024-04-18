import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
    return new ApolloClient({
      uri: 'http://10.151.1.228:4000/graphql',
      cache: new InMemoryCache(),
    })
};

export default createApolloClient;