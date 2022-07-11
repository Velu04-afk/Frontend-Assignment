
//Product Function

import React from 'react';
import ProductCart from './ProductCart';
import { SimpleGrid } from '@chakra-ui/react';

export default function Product({ products }) {
  return (
    <SimpleGrid columns={3} spacing={10} mt="10" ml="10">
      {products.map(p => (
        <ProductCart
          price={p.price}
          location={p.location}
          image={p.image}
          date={p.date}
        />
      ))}
    </SimpleGrid>
  );
}
