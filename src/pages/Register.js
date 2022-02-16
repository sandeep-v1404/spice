import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    HStack,
    useBreakpointValue,
    Icon,
    FormControl,
    FormLabel,
    useColorModeValue,
    Select,
    FormErrorMessage,
    Textarea,
} from '@chakra-ui/react';
import { Form, Formik, Field, } from "formik";
import { useNavigate } from 'react-router-dom';
import { addResponse } from "../firebase"
function SubmitFormikResponse() {
    let navigate = useNavigate();

    function validateInput(value) {
        let error;
        if (!value) {
            error = 'Required'
        }
        else if (value === "Full Name - UG/PG - Department - Year of Study\nEx:\nJohn Doe - UG - CSE - 3rd Year\nDonh Joe - UG - ECE - 2nd Year") {
            error = "Invalid"
        }
        return error
    }

    return (
        <Formik
            initialValues={{
                teamName: '',
                teamSize: 0,
                graduationType: "",
                mentorName: "",
                mentorDesignation: "",
                teamLeaderName: "",
                teamLeaderEmail: "",
                mobileNumber: 0,
                alternateMobileNumber: 0,
                institutionName: "",
                city: "",
                state: "",
                teamMembers: "Full Name - UG/PG - Department - Year of Study\nEx:\nJohn Doe - UG - CSE - 3rd Year, Donh Joe - UG - ECE - 2nd Year",
                domain: "",
                projectTitle: "",
                projectAbstract: "",
            }}
            onSubmit={(values, actions) => {
                actions.setSubmitting(false);
                addResponse(values);
                navigate("/thank-you")
            }}
        >
            {(props) => (
                <Form>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <Field name='teamName' validate={validateInput}>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.teamName && form.touched.teamName}>
                                            <FormLabel htmlFor='teamName'>Team Name</FormLabel>
                                            <Input
                                                {...field}
                                                id="teamName"
                                                bg={'gray.100'}
                                                type="text"
                                                border={0}
                                                color={'gray.500'} />
                                            <FormErrorMessage>{form.errors.teamName}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>
                            <Box>
                                <Field name='teamSize' validate={validateInput}>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.teamSize && form.touched.teamSize}>
                                            <FormLabel>Team Size</FormLabel>
                                            <Input
                                                {...field}
                                                type="number"
                                                bg={'gray.100'}
                                                placeholder="Enter Team's Size"
                                                border={0}
                                                color={'gray.500'} />
                                            <FormErrorMessage>{form.errors.teamSize}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>
                        </HStack>
                        <Field name='graduationType' validate={validateInput}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.graduationType && form.touched.graduationType}>
                                    <FormLabel>UG/PG</FormLabel>
                                    <Select
                                        {...field}
                                        border={0}
                                        bg={'gray.100'}
                                        color={'gray.500'}
                                        placeholder='Select option'>
                                        <option value='UG'>UG</option>
                                        <option value='PG'>PG</option>
                                    </Select>
                                    <FormErrorMessage>{form.errors.graduationType}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name='mentorName' validate={validateInput}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.mentorName && form.touched.mentorName}>
                                    <FormLabel>Mentor Name</FormLabel>
                                    <Input
                                        {...field}
                                        type="text"
                                        placeholder="Enter your Faculty Mentor Name"
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                        _placeholder={{
                                            color: 'gray.500',
                                        }}
                                    />
                                    <FormErrorMessage>{form.errors.mentorName}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name='mentorDesignation' validate={validateInput}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.mentorDesignation && form.touched.mentorDesignation}>
                                    <FormLabel>Mentor Designation</FormLabel>
                                    <Input
                                        {...field}
                                        type="text"
                                        placeholder="Enter your Mentor Designation"
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                        _placeholder={{
                                            color: 'gray.500',
                                        }}
                                    />
                                    <FormErrorMessage>{form.errors.mentorDesignation}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name='teamLeaderName' validate={validateInput}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.teamLeaderName && form.touched.teamLeaderName}>
                                    <FormLabel>Team Leader's Name</FormLabel>
                                    <Input
                                        {...field}
                                        type="text"
                                        placeholder="Enter Team Leader's Name"
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                        _placeholder={{
                                            color: 'gray.500',
                                        }}
                                    />
                                    <FormErrorMessage>{form.errors.teamLeaderName}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name='teamLeaderEmail' validate={validateInput}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.teamLeaderEmail && form.touched.teamLeaderEmail}>
                                    <FormLabel>Team Leader's Email ID</FormLabel>
                                    <Input
                                        {...field}
                                        type={"email"}
                                        placeholder="Enter Team Leader's EmailID"
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                        _placeholder={{
                                            color: 'gray.500',
                                        }}
                                    />
                                    <FormErrorMessage>{form.errors.teamLeaderEmail}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name='mobileNumber' validate={validateInput}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.mobileNumber && form.touched.mobileNumber}>
                                    <FormLabel>Mobile Number</FormLabel>
                                    <Input
                                        {...field}
                                        type={'number'}
                                        placeholder="Enter Mobile Number"
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                        _placeholder={{
                                            color: 'gray.500',
                                        }}
                                    />
                                    <FormErrorMessage>{form.errors.mobileNumber}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name='alternateMobileNumber' validate={validateInput}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.alternateMobileNumber && form.touched.alternateMobileNumber}>
                                    <FormLabel>Alternate Mobile Number</FormLabel>
                                    <Input
                                        {...field}
                                        type={'number'}
                                        placeholder="Enter Mobile Number"
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                        _placeholder={{
                                            color: 'gray.500',
                                        }}
                                    />
                                    <FormErrorMessage>{form.errors.alternateMobileNumber}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <Field name='institutionName' validate={validateInput}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.institutionName && form.touched.institutionName}>
                                    <FormLabel>Institution Name</FormLabel>
                                    <Input
                                        {...field}
                                        type={'text'}
                                        placeholder="Enter your Institution Name"
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                        _placeholder={{
                                            color: 'gray.500',
                                        }}
                                    />
                                    <FormErrorMessage>{form.errors.institutionName}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>


                        <Field name='city' validate={validateInput}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.city && form.touched.city}>
                                    <FormLabel>City/Town</FormLabel>
                                    <Input
                                        {...field}
                                        type={"text"}
                                        placeholder="Enter your City/Town Name"
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                        _placeholder={{
                                            color: 'gray.500',
                                        }}
                                    />
                                    <FormErrorMessage>{form.errors.city}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <Field name='state' validate={validateInput}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.state && form.touched.state}>
                                    <FormLabel>State</FormLabel>
                                    <Input
                                        {...field}
                                        type={"text"}
                                        placeholder="Enter the Name of your State"
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                        _placeholder={{
                                            color: 'gray.500',
                                        }}
                                    />
                                    <FormErrorMessage>{form.errors.state}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name='teamMembers' validate={validateInput}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.teamMembers && form.touched.teamMembers}>
                                    <FormLabel>Team Members (including Leader)</FormLabel>
                                    <Textarea
                                        style={{ whiteSpace: "pre-line" }}
                                        {...field}
                                        rows={5}
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                    />
                                    <FormErrorMessage>{form.errors.teamMembers}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Heading
                            color={'gray.800'}
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '2xl', md: '3xl' }}>
                            Abstract Details
                        </Heading>


                        <Field name='domain' validate={validateInput}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.domain && form.touched.domain}>
                                    <FormLabel>Choose the domain of your Abstract in following Areas</FormLabel>
                                    <Select
                                        {...field}
                                        placeholder='Select option'>
                                        <option value='Android'>Android</option>
                                        <option value='Big Data'>Big Data</option>
                                        <option value='Cloud Computing'>Cloud Computing</option>
                                        <option value='Data Analytics'>Data Analytics</option>
                                        <option value='Information Retrieval'>Information Retrieval</option>
                                        <option value='Cyber Security and Forensics'>Cyber Security and Forensics</option>
                                        <option value='Image Processing'>Image Processing</option>
                                        <option value='Distributed Computing'>Distributed Computing</option>
                                        <option value='Network Security'>Network Security</option>
                                        <option value='Software Engineering'>Software Engineering</option>
                                        <option value='Web Services'>Web Services</option>
                                        <option value='Web Technology'>Web Technology</option>
                                        <option value='Communication Networks'>Communication Networks</option>
                                        <option value='Bioinformatics'>Bioinformatics</option>
                                        <option value='Cognitive computing'>Cognitive computing</option>
                                        <option value='Wireless Sensor Networks'>Wireless Sensor Networks</option>
                                        <option value='Internet of Things (IoT)'>Internet of Things (IoT)</option>
                                        <option value='Embedded Systems'>Embedded Systems</option>
                                        <option value='Speech Processing'>Speech Processing</option>
                                        <option value='Video Analytics'>Video Analytics</option>
                                        <option value='Block-Chain Technologies'>Block-Chain Technologies</option>
                                    </Select>
                                    <FormErrorMessage>{form.errors.domain}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <Field name='projectTitle' validate={validateInput}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.projectTitle && form.touched.projectTitle}>
                                    <FormLabel>Project Title</FormLabel>
                                    <Input
                                        {...field}
                                        type={"text"}
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                        _placeholder={{
                                            color: 'gray.500',
                                        }}
                                    />
                                    <FormErrorMessage>{form.errors.projectTitle}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <Field name='projectAbstract' validate={validateInput}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.projectAbstract && form.touched.projectAbstract}>
                                    <FormLabel>Project Abstract</FormLabel>
                                    <Textarea
                                        {...field}
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                    />
                                    <FormErrorMessage>{form.errors.projectAbstract}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Button
                            type='submit'
                            isLoading={props.isSubmitting}
                            fontFamily={'heading'}
                            mt={8}
                            w={'full'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            color={'white'}
                            _hover={{
                                bgGradient: 'linear(to-r, red.400,pink.400)',
                                boxShadow: 'xl',
                            }}>
                            Submit
                        </Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    )
}

export default function Register() {

    return (
        <Box position={'relative'}>
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}>
                <Stack spacing={{ base: 10, md: 20 }}>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                        Register Now!
                    </Heading>
                </Stack>
                <Stack
                    bg={useColorModeValue('gray.50', 'gray.700')}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: 'lg' }}>
                    <Stack spacing={4}>
                        <Heading
                            color={'gray.800'}
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '2xl', md: '3xl' }}>
                            Abstract Submission Details
                        </Heading>
                        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                            We're looking for amazing engineers just like you! Become a part
                            of our rockstar engineering team and skyrocket your career!
                        </Text>
                    </Stack>
                    <SubmitFormikResponse></SubmitFormikResponse>
                </Stack>
            </Container>
            <Blur
                position={'absolute'}
                top={10}
                left={-10}
                style={{ filter: 'blur(70px)' }}
            />
        </Box>
    );
}

export const Blur = (props) => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: -1 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle cx="71" cy="61" r="111" fill="#F56565" />
            <circle cx="244" cy="106" r="139" fill="#ED64A6" />
            <circle cy="291" r="139" fill="#ED64A6" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
        </Icon>
    );
};