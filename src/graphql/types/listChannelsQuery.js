import graphql from 'babel-plugin-relay/macro';

export default graphql`
    query listChannelsQuery {
        listChannels {
            _id
            type
            participants {
                _id
                username
            }
        }
    }
`;
