import React from 'react';

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';


export default function navbar() {
  return (
    <React.Fragment>
      <chakra.header
        bg={'#29264a'}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Estatery Home Page"
              display="flex"
              alignItems="center"
            ></chakra.a>
            <chakra.h1
              fontSize="35px"
              fontWeight="extrabold"
              ml="5"
              color={'#f3d677'}
              fontStyle={'italic'}
            >
              Estatery
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: 'none',
                md: 'inline-flex',
              }}
            >
              <Button textColor={'#f3d677'} variant="ghost">
                Rent
              </Button>
              <Button textColor={'#f3d677'} variant="ghost">
                Buy
              </Button>
              <Button textColor={'#f3d677'} variant="ghost">
                Sell
              </Button>
              <Button textColor={'#f3d677'} variant="ghost">
                Manage Property
              </Button>
              <Button textColor={'#f3d677'} variant="ghost">
                Resources
              </Button>
              <Button textColor={'#f3d677'} variant="ghost">
                Login
              </Button>
              <Button colorScheme={'telegram'}>Sign Up</Button>
            </HStack>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
