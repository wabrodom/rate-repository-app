import { useQuery, useLazyQuery } from "@apollo/client";

import { GET_REPOSITORIES, GET_REPOSITORY, SEARCH_REPOSITORIES } from "../graphql/queries";

const useRepositories = ( variables ) => {
  const { data, loading, fetchMore, ...result} = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
  }); 

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables
      }
    })
  }

  return { 
    repositories: ( data ? data.repositories: undefined ), 
    fetchMore: handleFetchMore,
    loading,
    ...result
  };
};

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

export const useFindRepository = () => {
  const [getSearchedRopsitories] = useLazyQuery(SEARCH_REPOSITORIES)

  const getRepositoryIds = async (value) => {
    const response = await getSearchedRopsitories({ variables: { "searchKeyword": value } })
    const repositories = response.data.repositories;

    const repositoryIds = repositories
      ? repositories.edges.map(edge => edge.node.id)
      : [];

    return repositoryIds
  }
  return getRepositoryIds
}