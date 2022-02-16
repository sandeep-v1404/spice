import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Button,
    useDisclosure,
    useColorMode,
    useColorModeValue,
    Stack,
    LinkBox,
    LinkOverlay,
    Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as ReachLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import { signOutCustom } from '../firebase';
import {
    getAuth, onAuthStateChanged
} from "firebase/auth";
const Links = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Register',
        href: '/register'
    }, {
        name: 'About',
        href: '/about'
    },
];

const NavLink = ({ href, name }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        as={ReachLink}
        to={href}>
        {name}
    </Link>
);

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    const [user, setUser] = useState("");
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user.uid);
            } else {
                setUser(null);
            }
        });
    }, [user]);

    return (
        <>
            <Box bg={useColorModeValue('gray.400', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <LinkBox>
                            <LinkOverlay as={ReachLink} to="/">
                                <Image boxSize="150px"
                                    objectFit="contain" src="https://www.sathyabama.ac.in/themes/custom/sathyabama/logo.svg" />
                            </LinkOverlay>
                        </LinkBox>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link, index) => (
                                <NavLink key={index} name={link.name} href={link.href} />
                            ))}
                            {user &&
                                <Button onClick={() => signOutCustom()} >Logout</Button>
                            }
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Flex>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link, index) => (
                                <NavLink key={index} name={link.name} href={link.href} />
                            ))}
                            {user &&
                                <Button onClick={() => signOutCustom()} >Logout</Button>
                            }
                        </Stack>


                    </Box>
                ) : null}

            </Box>
        </>
    );
}