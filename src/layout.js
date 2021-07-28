import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import './sass/mainStyles.sass';
import './sass/scrollbar.sass';

export default function Layout(props) {
  return (
    <ChakraProvider>
      <BrowserRouter>{props.children}</BrowserRouter>
    </ChakraProvider>
  );
}
