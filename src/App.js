import React from 'react';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import CustomHeading from './Components/CustomHeading';
import Filter from './Components/Filter';


import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';


function App() {
  return (
    
    <ChakraProvider theme={theme} >
      <Navbar/>
      <CustomHeading/>
      <Filter/>
    </ChakraProvider>
  );
}

export default App;
