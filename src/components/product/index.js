import { Card } from "@chakra-ui/react";
import React from "react";
import { Image, Heading, CardBody, Stack, Text, Divider, CardFooter, ButtonGroup, Button } from "@chakra-ui/react";

function Product(props) {
    const { productName, productImageUrl, price } = props

    return (
        <Card maxW='100%' height="300px">
            <CardBody p="2" maxHeight="70%">
                <Image
                    src={productImageUrl}
                    alt={productName}
                    borderRadius='lg'
                    width="100%"
                    height="60%"
                />
                <Stack mt='2' spacing='2'>
                    <Heading size='xs'>{productName}</Heading>
                    <Text color='blue.600' fontSize="1rem">
                        Rp. {price.toLocaleString()}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter p="2" justifyContent="center" maxHeight="30%">
                <ButtonGroup direction="column" justifyContent="center" alignContent="center">
                    <Stack direction="column" mt="2" justifyContent="center" alignContent="center">
                        <Button variant='solid' colorScheme='teal' size="xs">
                            Buy now
                        </Button>
                        <Button variant='outline' colorScheme='teal' size="xs">
                            Add to cart
                        </Button>
                    </Stack>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

// For Testing Purpose
Product.defaultProps = {
    productImageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    description: "Blablabla",
    productName: "Green double couch with wooden legs",
    price: 1000000
}

export default Product;