import { render, screen } from "@testing-library/react-native";
import { within } from "@testing-library/react-native";
import { RepositoryListContainer } from "../components/RepositoryList";

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      render(<RepositoryListContainer repositories={repositories}/>);
     
      // screen.debug({ mapProps: ({ style, ...props }) => ({ props }) })

      const repositoryItems = screen.getAllByTestId('repositoryItem');
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems
      

      const repostoriesItemTest = () => {
        let count = 0; 

        return function(item) {
          const forksElementParent  = within(item).getByText(/forks/i).parent.parent.parent;
          const startsElementParent = within(item).getByText(/stars/i).parent.parent.parent;
  
          const fullname    = repositories.edges[count].node.fullName
          const description = repositories.edges[count].node.description
          const language    = repositories.edges[count].node.language
          const ratingAvg   = repositories.edges[count].node.ratingAverage
          const reviewCount = repositories.edges[count].node.reviewCount
  
          expect(item).toHaveTextContent(fullname);
          expect(item).toHaveTextContent(description);
          expect(item).toHaveTextContent(language);
          expect(forksElementParent) .toHaveTextContent(/forks:\s*\d+\w*/i)
          expect(startsElementParent).toHaveTextContent(/stars:\s*\d+\w*/i)
          expect(item).toHaveTextContent(ratingAvg);
          expect(item).toHaveTextContent(reviewCount);

          count +=1;
        }
      }

      const privateTest = repostoriesItemTest();

      privateTest(firstRepositoryItem);
      privateTest(secondRepositoryItem);

    });
  });
});