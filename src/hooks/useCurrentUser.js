import { useQuery } from "@apollo/client"
import { CURRENTUSER } from "../graphql/queries"

const useCurrentUser = (bool = false) => {
  const { data, ...rest } = useQuery(CURRENTUSER, {
    variables: {
      includeReviews: bool,
    },
    fetchPolicy: 'cache-and-network',
  })

  return { currentUser: (data ? data.me : undefined), ...rest }
}

export default useCurrentUser;