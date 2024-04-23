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

      // Add your test code here
      render(<RepositoryListContainer repositories={repositories}/>);


      screen.debug();

      const repositoryItems = screen.getAllByTestId('repositoryItem');
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
       /* 
        repository's name,
       description, 
       language, 
       forks count, 
       stargazers count, 
       rating average, 
       and review count
       */

      const forks = screen.queryAllByTestId('forks')
      const stars = screen.queryAllByTestId('stars')

      const first_Fullname    = repositories.edges[0].node.fullName
      const first_Description = repositories.edges[0].node.description
      const first_language    = repositories.edges[0].node.language
      const first_forks       = repositories.edges[0].node.forksCount
      const first_stargazers  = repositories.edges[0].node.stargazersCount
      const first_ratingAvg   = repositories.edges[0].node.ratingAverage
      const first_reviewCount = repositories.edges[0].node.reviewCount

      const reg_first_Fullname    = new RegExp(first_Fullname)   
      const reg_first_Description = new RegExp(first_Description) 
      const reg_first_language    = new RegExp(first_language)    
      const reg_first_forks       = new RegExp(/forks:/, 'i');    
      const reg_first_stargazers  = new RegExp(/stars:/, 'i')  
      const reg_first_ratingAvg   = new RegExp(first_ratingAvg)   
      const reg_first_reviewCount = new RegExp(first_reviewCount) 

      expect(firstRepositoryItem).toHaveTextContent(reg_first_Fullname);
      expect(firstRepositoryItem).toHaveTextContent(reg_first_Description);
      expect(firstRepositoryItem).toHaveTextContent(reg_first_language);
      
      expect(firstRepositoryItem).toContainElement(forks[0]);
      expect(firstRepositoryItem).toContainElement(stars[0]);

      expect(firstRepositoryItem).toHaveTextContent(reg_first_stargazers);

      expect(firstRepositoryItem).toHaveTextContent(reg_first_ratingAvg);
      expect(firstRepositoryItem).toHaveTextContent(reg_first_reviewCount);

    });
  });
});