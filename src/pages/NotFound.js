import {
    Box,
    Heading,
    Container,
    Text,
    Stack,
} from '@chakra-ui/react';

export default function NotFound() {
    return (
        <>
            <Container maxW={'3xl'} height={'100vh'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        <Text as={'span'} color={'red.400'}>
                            404
                        </Text>
                        <br />
                        Page Not Found
                    </Heading>
                </Stack>
            </Container >
        </>
    );
}