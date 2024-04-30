import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES, GET_REPOSITORY } from "../graphql/queries";

const useRepositories = ( { orderBy, orderDirection }) => {
  const { data, ...result} = useQuery(GET_REPOSITORIES, {
    variables: {
      // "orderBy": 'CREATED_AT',
      // "orderDirection": 'DESC'
      "orderBy": orderBy,
      "orderDirection": orderDirection
    },
    fetchPolicy: 'cache-and-network',
  }); 

  return { repositories: ( data ? data.repositories: undefined ), ...result}
}

export default useRepositories;

export const useRepository = (id) => {
  const { data, ...result } = useQuery(GET_REPOSITORY, {
    variables: {
      "repositoryId": id,
    },
    fetchPolicy: 'cache-and-network',
  });


  return { repository: ( data ? data.repository: undefined ), ...result}
}