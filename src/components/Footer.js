import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    LinkBox,
    LinkOverlay,
    Image
} from '@chakra-ui/react';
import { Link as ReachLink } from "react-router-dom";
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function SmallCentered() {
    return (
        <Box
            bg={useColorModeValue('gray.400', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}>
                <LinkBox>
                    <LinkOverlay as={ReachLink} to="/">
                        <Image boxSize="150px"
                            objectFit="contain" src="https://www.sathyabama.ac.in/themes/custom/sathyabama/logo.svg" />
                    </LinkOverlay>
                </LinkBox>
                <Stack direction={'row'} spacing={6}>
                    <Link as={ReachLink} to={'/'}>Home</Link>
                    <Link as={ReachLink} to={'/register'}>Register</Link>
                    <Link as={ReachLink} to={'/about'}>About</Link>
                </Stack>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>
                        © 2022 Sathyabama Institute of Science and Technology, All rights reserved.
                    </Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Twitter'} href={'#'}>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'#'}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}