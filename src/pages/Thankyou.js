import {
    Box,
    Heading,
    Container,
    Image,
    Text,
    Stack,
    Center
} from '@chakra-ui/react';

export default function Thankyou() {
    return (
        <>
            <Container maxW={'3xl'} height={'100vh'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    verticalAlign={'center'}
                    py={{ base: 20, md: 36 }}>
                    <Center>
                    <Image
                    borderRadius="lg"
                            src={
                                'https://cpanel.sendme.today/partnerForm/img/done.png'
                            }
                            maxW='200px'
                            alt="timeline path"
                            objectFit="contain"
                            />
                        </Center>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '4xl' }}
                        lineHeight={'110%'}>
                        <Text as={'span'} color={'green.400'}>
                            Congrats! Your registration is completed
                        </Text>
                    </Heading>
                </Stack>
            </Container >
        </>
    );
}