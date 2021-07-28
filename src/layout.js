import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

export default function Layout(props) {
  return (
    <ChakraProvider>
      <BrowserRouter>{props.children}</BrowserRouter>
    </ChakraProvider>
  );
}
