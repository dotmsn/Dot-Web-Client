import graphql from 'babel-plugin-relay/macro';

export default graphql`
    query listChannelsQuery {
        listChannels {
            _id
            participants {
                _id
                username
            }
        }
    }
`;
