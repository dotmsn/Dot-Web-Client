import graphql from 'babel-plugin-relay/macro';

export default graphql`
    mutation sendUserConfirmMutation {
        sendUserConfirm {
            _id
        }
    }
`;