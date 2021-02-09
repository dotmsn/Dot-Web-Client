import graphql from 'babel-plugin-relay/macro';

export default graphql`
    query getCurrentUserQuery {
        currentUser {
            _id
            username
        }
    }
`;
