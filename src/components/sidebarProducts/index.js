import React from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import Product from '../product';

const SidebarProducts = (props) => {
  const { productsArray } = props

  return (
    <Flex h="100vh" bg="gray.800" color="white" direction="column">
      <VStack spacing="4" p="4" flex="1" overflowY="auto">
        {productsArray.map(item => (
          <Product key={item._id} productName={item.title} price={item.price}
            productImageUrl={item.imageUrl}/>
        ))}
      </VStack>
    </Flex>
  );
};

export default SidebarProducts;
