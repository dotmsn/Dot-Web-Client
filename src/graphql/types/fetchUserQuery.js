import graphql from 'babel-plugin-relay/macro';

export default graphql`
    query fetchUserQuery ($username: String!) {
        fetchUser (username: $username) {
            _id
            username
            displayname
            bio
        }
    }
`;
