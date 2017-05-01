import gql from 'graphql-tag';

export default gql`
  query {
    songs {
      id
      title
      lyrics {
        id
        content
      }
    }
  }
`;
