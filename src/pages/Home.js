import {
    Box, Button, chakra, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Stack, Stat, StatHelpText, StatLabel,
    StatNumber, Text, useBreakpointValue, useColorModeValue, VStack
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { TestmonialCard } from '../components/TestmonialCard';

const testimonials = [
    {
        heading: "Project Mania",
        content: "A Project Competition for II Yr / III Yr / IV Yr Students"
    },
    {
        heading: "TechCanvas",
        content: "Poster Competition for II Yr / III Yr / IV Yr Students"
    },
];

export const BlogAuthor = (props) => {
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                src="https://100k-faces.glitch.me/random-image"
                alt={`Avatar of ${props.name}`}
            />
            <Text fontWeight="medium">{props.name}</Text>
            <Text>—</Text>
            <Text>{props.date.toLocaleDateString()}</Text>
        </HStack>
    );
};

const Home = () => {
    const myRef = useRef(null)

    const executeScroll = () => myRef.current.scrollIntoView()
    return (
        <>
            <Flex
                w={'full'}
                h={'100vh'}
                backgroundImage={
                    'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}>
                <VStack
                    w={'full'}
                    justify={'center'}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                    <Stack maxW={'2xl'} align={'center'} spacing={6}>
                        <Heading as="h1" color={"white"}>SPICE 2022</Heading>
                        <Stack direction={'row'}>
                            <Button
                                onClick={executeScroll}
                                bg={'whiteAlpha.300'}
                                rounded={'full'}
                                color={'white'}
                                _hover={{ bg: 'whiteAlpha.500' }}>
                                Scroll Down
                            </Button>
                        </Stack>
                    </Stack>
                </VStack>
            </Flex>

            <Container maxW={'7xl'} p="12" ref={myRef}>
                <Box
                    marginTop={{ base: '1', sm: '5' }}
                    display="flex"
                    flexDirection={{ base: 'column', sm: 'row' }}
                    justifyContent="space-between">
                    <Box
                        display="flex"
                        flex="1"
                        marginRight="3"
                        position="relative"
                        alignItems="center">
                        <Box
                            width={{ base: '100%', sm: '85%' }}
                            zIndex="2"
                            marginLeft={{ base: '0', sm: '5%' }}
                            marginTop="5%">
                            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                <Image
                                    borderRadius="lg"
                                    src={
                                        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                                    }
                                    alt="some good alt text"
                                    objectFit="contain"
                                />
                            </Link>
                        </Box>
                        <Box zIndex="1" width="100%" position="absolute" height="100%">
                            <Box
                                bgGradient={useColorModeValue(
                                    'radial(orange.600 1px, transparent 1px)',
                                    'radial(orange.300 1px, transparent 1px)'
                                )}
                                backgroundSize="20px 20px"
                                opacity="0.4"
                                height="100%"
                            />
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="column"
                        justifyContent="center"
                        marginTop={{ base: '3', sm: '0' }}>
                        <Heading marginTop="1">
                            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                SPICE 2022
                            </Link>
                        </Heading>
                        <Text
                            as="p"
                            marginTop="2"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg">
                            Sathyabama Project Innovation Competition and Exhibition
                            (SPICE 2022) is a Inter-Departmental Project Competition for
                            CSE and IT Students, organized by Sathyabama Institute of
                            Science and Technology to encourage students to apply their
                            knowledge, skill, passion, and creativity to technology solutions
                            that can make a difference to the world today.
                        </Text>
                    </Box>
                </Box>
            </Container>

            <Flex
                textAlign={'center'}
                pt={10}
                justifyContent={'center'}
                direction={'column'}
                width={'full'}>
                <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
                    <chakra.h1
                        fontWeight={'bold'}
                        fontSize={'4xl'}>
                        Events
                    </chakra.h1>
                </Box>
                <SimpleGrid
                    columns={{ base: 1, xl: 2 }}
                    spacing={'20'}
                    mt={16}
                    mx={'auto'}>
                    {testimonials.map((cardInfo, index) => (
                        <TestmonialCard {...cardInfo} key={index} index={index} />
                    ))}
                </SimpleGrid>
            </Flex>

            <Container centerContent maxW="7xl" pt={5} px={{ base: 2, sm: 12, md: 17 }} py={4}>
                <chakra.h1
                    textAlign={'center'}
                    fontSize={'4xl'}
                    py={10}
                    fontWeight={'bold'}>
                    Important Guidelines
                </chakra.h1>
                <SimpleGrid columns={{ base: 1, md: 3 }} justifyItems={"center"} spacing={{ base: 2, lg: 8 }}>
                    <StatsCard
                        title={'Prizes'}
                        desc={"Exciting cash prizes for first, second, third winner and many more consolation prizes."}
                        icon={<BsPerson size={'3em'} />}
                    />
                    <StatsCard
                        title={'Eligibility'}
                        desc={"Participants must be only from the  CSE or IT Department. Maximum of 3 members per team. A Registration fee of ₹100 has to be paid ."}
                        icon={<FiServer size={'3em'} />}
                    />
                    <StatsCard
                        title={'Call for Abstracts'}
                        desc={"The last date to send your abstracts is March 9, 2022. Candidates will be informed about their selection by March 15, 2022."}
                        icon={<GoLocation size={'3em'} />}
                    />
                    <StatsCard
                        title={'Contact'}
                        desc={"Phone Number: (044) 2450 3159 \nEmail ID: spice.soc@sathyabama.ac.in"}
                        icon={<GoLocation size={'3em'} />}
                    />
                </SimpleGrid>
            </Container>
        </>
    )
}

function StatsCard({ title, stat, icon, desc }) {
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'bold'} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                    <StatHelpText>
                        {desc}
                    </StatHelpText>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}>
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
}


export default Home