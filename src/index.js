// Libraries
import { ReactRelayContext } from 'react-relay';
import { useContext } from 'react';
import ReactDOM from 'react-dom';

// Providers and components
import { ChakraProvider } from '@chakra-ui/react';
import { withData } from './relay/withData';

// Theme
import { ColorModeScript } from '@chakra-ui/react';
import theme from './theme';

// Main app component
import App from './App';

// Styles
import './index.sass';

// Redux
import { Provider } from 'react-redux';
import { sessionService } from 'redux-react-session';
import store from './redux/store';

sessionService.initSessionService(store);

ReactDOM.render(
    <ChakraProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </ChakraProvider>,
    document.getElementById('root'),
);
