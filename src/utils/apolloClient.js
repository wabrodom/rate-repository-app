import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
    return new ApolloClient({
      uri: 'http://localhost:4000/',
      cache: new InMemoryCache(),
    })
};

export default createApolloClient;


/* 
http://localhost:5000/api/repositories
http://10.151.1.228:5000/api/repositories

http://localhost:4000/
http://10.151.1.228:4000/graphql

http://192.168.1.100:4000/graphql
*/

