import { Heading, Input, Flex, Button, Text } from '@chakra-ui/react';

export default function CustomHeading() {
  return (
    <Flex alignItems={'center'} justifyContent="space-evenly">
      <Text fontStyle="initial" fontWeight={'thin'} mt="5" fontSize={'4xl'}>
        Search properties to rent
      </Text>
      <Flex mt={'7'}>
        <Input
          placeholder="Search with search Bar"
          w="100%"
          color={'GrayText'}
          focusBorderColor="black"
          _placeholder={{ opacity: 1.0, color: 'inherit' }}
        />
      </Flex>
    </Flex>
  );
}


