import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES, GET_REPOSITORY } from "../graphql/queries";

const useRepositories = () => {
  const { data, ...result} = useQuery(GET_REPOSITORIES, {
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