import {
    Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack, useColorModeValue
} from '@chakra-ui/react';
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { getResponses, signInCustom } from "../firebase";
import {
    getAuth, onAuthStateChanged
} from "firebase/auth";
function SignIn() {
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
                email: "",
                password: "",
            }}
            onSubmit={(values, actions) => {
                actions.setSubmitting(false);
                signInCustom(values.email, values.password);
            }}
        >
            {(props) => (
                <Form>
                    <Stack spacing={4}>
                        <Heading
                            color={'gray.800'}
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '2xl', md: '3xl' }}>
                            SignIn
                        </Heading>
                        <Field name='email' validate={validateInput}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        {...field}
                                        type="text"
                                        placeholder="Enter your Email"
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                        _placeholder={{
                                            color: 'gray.500',
                                        }}
                                    />
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name='password' validate={validateInput}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.password && form.touched.password}>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        {...field}
                                        type="text"
                                        placeholder="Enter your Password"
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                        _placeholder={{
                                            color: 'gray.500',
                                        }}
                                    />
                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
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
const Dashboard = () => {
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

    const columns = [
        {
            name: 'Team Name',
            selector: row => row.teamName,
            sortable: true,
        },
        {
            name: 'Team Size',
            selector: row => row.teamSize,
            sortable: true,
        },
        {
            name: 'Graduation Type',
            selector: row => row.graduationType,
            sortable: true,
        },
        {
            name: 'Mentor Name',
            selector: row => row.mentorName,
            sortable: true,
        },
        {
            name: 'Mentor Designation',
            selector: row => row.mentorDesignation,
            sortable: true,
        },
        {
            name: 'Team Leader Name',
            selector: row => row.teamLeaderName,
            sortable: true,
        },
        {
            name: 'Team Leader Email',
            selector: row => row.teamLeaderEmail,
            sortable: true,
        },
        {
            name: 'Mobile Number',
            selector: row => row.mobileNumber,
            sortable: true,
        },
        {
            name: 'Alternate Mobile Number',
            selector: row => row.alternateMobileNumber,
            sortable: true,
        },
        {
            name: 'Institution Name',
            selector: row => row.institutionName,
            sortable: true,
        },
        {
            name: 'City',
            selector: row => row.city,
            sortable: true,
        },
        {
            name: 'State',
            selector: row => row.state,
            sortable: true,
        },
        {
            name: 'Team Members',
            selector: row => row.teamMembers,
            sortable: true,
        },
        {
            name: 'Domain',
            selector: row => row.domain,
            sortable: true,
        },
        {
            name: 'Project Title',
            selector: row => row.projectTitle,
            sortable: true,
        },
        {
            name: 'Project Abstract',
            selector: row => row.projectAbstract,
            sortable: true,
        },
    ];

    const [responses, setResponses] = useState([]);
    useEffect(() => {
        getResponses().then(data => {
            setResponses(data)
        })
    }, []);

    const bgColor = useColorModeValue('gray.50', 'gray.700');
    return (
        <>
            {
                user ? <Stack
                    bg={bgColor}
                    rounded={'xl'}
                    spacing={{ base: 8 }}
                    height={"lg"}
                    p={2}
                    maxW={"full"}>
                    <DataTable
                        columns={columns}
                        data={responses}
                    />
                </Stack> :
                    <Container
                        centerContent
                        spacing={{ base: 10, lg: 32 }}
                        py={{ base: 10, sm: 20, lg: 32 }}>
                        <Stack
                            bg={bgColor}
                            rounded={'xl'}
                            p={{ base: 4, sm: 6, md: 8 }}
                            spacing={{ base: 8 }}
                            maxW={{ lg: 'lg' }}>
                            <Stack spacing={4}>
                            </Stack>
                            <SignIn />
                        </Stack>
                    </Container>
            }
        </>
    )
}

export default Dashboard