import React from "react";
import {
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';

const Thankyou = () => {
    return (
        <>
            <Stack
                bg={useColorModeValue('gray.50', 'gray.700')}
                rounded={'xl'}
                spacing={{ base: 8 }}
                height={"lg"}
                p={2}
                maxW={"full"}>
                <h1>Thank you</h1>
            </Stack>
        </>
    )
}

export default Thankyou