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
        content: "A Project Competition for Engineering Students"
    },
    {
        heading: "TechCanvas",
        content: "Poster Competition for Engineering Students"
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
                    'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}>
                <VStack
                    w={''}
                    justify={'center'}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    bgGradient={'linear(to-r, blackAlpha.800, transparent)'}>
                    <Stack maxW={'2xl'} align={'center'} spacing={6}>
                        <Heading isCentered textAlign={'center'} as="h1" color={"white"} fontSize='80px' >SPICE 2K22</Heading>
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
                                        'https://cdn.discordapp.com/attachments/786860090841366538/950015369110757417/1c_fiB-YgbnMl6nntYGBMHQ_1.png'
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
                            fontSize="lg"
                            align="justify">
                            Sathyabama Project Innovation Competition and Exhibition
                            (SPICE 2022) is a Inter-Departmental Project Competition, organized by School of Computing to encourage students to apply their
                            knowledge, skill, passion, and creativity to technology solutions
                            that can make a difference to the world today.
                        </Text>
                    </Box>
                </Box>
            </Container>

            <Flex
                textAlign={'center'}
                pt={10}
                mb={'20px'}
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
            <hr />
            <Container centerContent maxW="7xl" pt={5} mt={'20px'} px={{ base: 2, sm: 12, md: 17 }} py={4}>
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
                        desc={"Exciting prizes for first, second, third winner and many more consolation prizes."}
                        icon={<BsPerson size={'3em'} />}
                    />
                    <StatsCard
                        points={["Participants must be only from the CSE or IT Department.", " Maximum of 3 members per team.", " A Registration fee of ₹100 has to be paid ."]}
                        title={'Eligibility'}
                        desc={""}
                        icon={<FiServer size={'3em'} />}
                    />
                    <StatsCard
                        title={'Call for Abstracts'}
                        desc={"The last date to send your abstracts is 16-03-2022. Candidates will be informed about their selection by 20-03-2022."}
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

function StatsCard({ title, stat, icon, desc, points }) {
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
                    {points && points.map((point, index) =>
                        <StatHelpText key={index}>
                            {point}
                        </StatHelpText>
                    )
                    }
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