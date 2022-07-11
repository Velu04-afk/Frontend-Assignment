
//Code for the Implementation of Filters

import React from 'react';
import { Heading, Input, Flex, Button, Image } from '@chakra-ui/react';
import Product from './Product';
const allProducts = [                                        //// All products are included in the array 
  {
    price: 10000,
    location: 'India',
    propertyType: 'Cottage',
    image:
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2022-07-11',
  },
  {
    image:
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 12000,
    location: 'Palm Harbour',
    propertyType: 'Cottage',
    date: '2022-07-11',
  },
  {
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 10000,
    location: 'Palm Harbour',
    propertyType: 'Cottage',
    date: '2022-07-11',
  },
  {
    image:
      'https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 15000,
    location: 'Palm Harbour',
    propertyType: 'House',
    date: '2022-07-11',
  },
  {
    image:
      'https://images.pexels.com/photos/209274/pexels-photo-209274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 20000,
    location: 'Palm Harbour',
    propertyType: 'House',
    date: '2022-07-11',
  },
  {
    image:
      'https://images.pexels.com/photos/1895031/pexels-photo-1895031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 10000,
    location: 'USA',
    propertyType: 'House',
    date: '2022-07-11',
  },
  {
    image:
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 12000,
    location: 'USA',
    propertyType: 'House',
    date: '2022-07-11',
  },
  {
    image:
      'https://images.pexels.com/photos/8134816/pexels-photo-8134816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 15000,
    location: 'USA',
    propertyType: 'House',
    date: '2022-07-11',
  },
  {
    image:
      'https://images.pexels.com/photos/8134745/pexels-photo-8134745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 20000,
    location: 'USA',
    propertyType: 'House',
    date: '2022-07-11',
  },
  {
    image:
      'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 15000,
    location: 'USA',
    propertyType: 'House',
    date: '2022-07-11',
  },
  {
    image:
      'https://images.pexels.com/photos/6267583/pexels-photo-6267583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 12000,
    location: 'USA',
    propertyType: 'House',
    date: '2022-07-11',
  },
];

/// Filter Logic

export default function CustomHeading() {
  const [product, setProduct] = React.useState(allProducts);
  const [value, setValue] = React.useState('');
  const [propertyValue, setPropertyValue] = React.useState('');
  const [dateValue, setDateValue] = React.useState('');
  const [locationValue, setLocationValue] = React.useState('');

  const handleChange = event => {
    setValue(event.target.value);
    setProduct(allProducts);
  };
  const propertyHandleChange = event => {
    setPropertyValue(event.target.value);
    setProduct(allProducts);
  };
  const dateHandleChange = event => {
    setDateValue(event.target.value);
    console.log(event.target.value);
    setProduct(allProducts);
  };
  const locationHandleChange = event => {
    setLocationValue(event.target.value);
    setProduct(allProducts);
  };

  const applyFilter = () => {
    if (
      value !== '' &&
      propertyValue !== '' &&
      locationValue !== '' &&
      dateValue !== ''
    ) {
      setProduct(
        product.filter(
          p =>
            p.price == parseInt(value) &&
            p.propertyType == propertyValue &&
            p.location == locationValue &&
            p.date == dateValue
        )
      );
    } else if (value !== '' && propertyValue !== '' && locationValue !== '') {
      setProduct(
        product.filter(
          p =>
            p.price == parseInt(value) &&
            p.propertyType == propertyValue &&
            p.location == locationValue
        )
      );
    } else if (
      dateValue !== '' &&
      propertyValue !== '' &&
      locationValue !== ''
    ) {
      setProduct(
        product.filter(
          p =>
            p.date == dateValue &&
            p.propertyType == propertyValue &&
            p.location == locationValue
        )
      );
    } else if (value !== '' && dateValue !== '' && locationValue !== '') {
      setProduct(
        product.filter(
          p =>
            p.date == dateValue &&
            p.price == parseInt(value) &&
            p.location == locationValue
        )
      );
    } else if (value !== '' && dateValue !== '' && propertyValue !== '') {
      setProduct(
        product.filter(
          p =>
            p.date == dateValue &&
            p.price == parseInt(value) &&
            p.propertyType == propertyValue
        )
      );
    } else if (value !== '' && propertyValue !== '') {
      setProduct(
        product.filter(
          p => p.price == parseInt(value) && p.propertyType == propertyValue
        )
      );
    } else if (value !== '' && locationValue !== '') {
      setProduct(
        product.filter(
          p => p.price == parseInt(value) && p.location == locationValue
        )
      );
    } else if (propertyValue !== '' && locationValue !== '') {
      setProduct(
        product.filter(
          p => p.propertyType == propertyValue && p.location == locationValue
        )
      );
    } else if (propertyValue !== '' && dateValue !== '') {
      setProduct(
        product.filter(
          p => p.propertyType == propertyValue && p.date == dateValue
        )
      );
    } else if (locationValue !== '' && dateValue !== '') {
      setProduct(
        product.filter(p => p.location == locationValue && p.date == dateValue)
      );
    } else if (value !== '' && dateValue !== '') {
      setProduct(
        product.filter(p => p.price == parseInt(value) && p.date == dateValue)
      );
    } else if (value != '') {
      setProduct(product.filter(p => p.price == parseInt(value)));
    } else if (propertyValue !== '') {
      setProduct(product.filter(p => p.propertyType == propertyValue));
    } else if (locationValue !== '') {
      setProduct(product.filter(p => p.location == locationValue));
    } else if (dateValue !== '') {
      setProduct(product.filter(p => p.date == dateValue));
    }
  };

//// CSS

  return (
    <Flex
      alignItems="center"
      w="100%"
      justifyContent="center"
      mt="5"
      flexDir="column"
    >
      <Flex alignItems="center" w="75%" justifyContent="space-around" mt="5">
        <Input
          placeholder="Search with price "
          w="20%"
          color={'GrayText'}
          focusBorderColor="black"
          _placeholder={{ opacity: 1.0, color: 'inherit' }}
          value={value}
          onChange={handleChange}
        />
        <Input
          color={'GrayText'}
          focusBorderColor="black"
          _placeholder={{ opacity: 1.0, color: 'inherit' }}
          placeholder="Search with Property Type"
          w="20%"
          value={propertyValue}
          onChange={propertyHandleChange}
        />
        <Input
          color={'GrayText'}
          focusBorderColor="black"
          _placeholder={{ opacity: 1.0, color: 'inherit' }}
          placeholder="Search by Location"
          w="20%"
          value={locationValue}
          onChange={locationHandleChange}
        />
        <Input
          color={'GrayText'}
          focusBorderColor="black"
          _placeholder={{ opacity: 1.0, color: 'inherit' }}
          placeholder="Search by Date"
          type="date"
          w="20%"
          value={dateValue}
          onChange={dateHandleChange}
        />
        <Button
          colorScheme="blue"
          onClick={() => {
            applyFilter();
          }}
        >
          Search
        </Button>
      </Flex>
      <Product products={product} />
    </Flex>
  );
}
