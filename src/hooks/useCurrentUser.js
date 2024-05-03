import { useQuery } from "@apollo/client"
import { CURRENTUSER } from "../graphql/queries"

const useCurrentUser = (bool = false) => {
  const { data, refetch, ...rest } = useQuery(CURRENTUSER, {
    variables: {
      includeReviews: bool,
    },
    fetchPolicy: 'cache-and-network',
  })

  return { currentUser: (data ? data.me : undefined), refetch, ...rest }
}

export default useCurrentUser;