import {
    Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack, useColorModeValue
} from '@chakra-ui/react';
import { Field, Form, Formik } from "formik";
import React, { useEffect, useMemo, useState } from "react";
import DataTable from 'react-data-table-component';
import { getResponses, signInCustom } from "../firebase";
import {
    getAuth, onAuthStateChanged
} from "firebase/auth";
import FilterComponent from '../components/FilterComponent';

function SignIn() {
    const [authError, setAuthError] = useState("")

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
                signInCustom(values.email, values.password).then(res => {
                    actions.setSubmitting(true);
                }).catch(err => {
                    if (err) {
                        actions.setSubmitting(false)
                        setAuthError(err.message)
                    }
                });

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
                                        type="password"
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
                        {authError && <h1>{authError}</h1>}
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
            wrap: true
        },
        {
            name: 'Team Size',
            selector: row => row.teamSize,
            sortable: true,
            wrap: true
        },
        {
            name: 'Graduation Type',
            selector: row => row.graduationType,
            sortable: true,
            wrap: true
        },
        {
            name: 'Mentor Name',
            selector: row => row.mentorName,
            sortable: true,
            grow: 2,
            wrap: true
        },
        {
            name: 'Mentor Designation',
            selector: row => row.mentorDesignation,
            sortable: true,
            grow: 2,
            wrap: true
        },
        {
            name: 'Team Leader Name',
            selector: row => row.teamLeaderName,
            sortable: true,
            wrap: true
        },
        {
            name: 'Team Leader Email',
            selector: row => row.teamLeaderEmail,
            sortable: true,
            grow: 4,
            wrap: true
        },
        {
            name: 'Mobile Number',
            selector: row => row.mobileNumber,
            sortable: true,
            grow: 2,
            wrap: true
        },
        {
            name: 'Alternate Mobile Number',
            selector: row => row.alternateMobileNumber,
            sortable: true,
            grow: 2,
            wrap: true
        },
        {
            name: 'Department Name',
            selector: row => row.departmentName,
            sortable: true,
            wrap: true
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true,
            wrap: true
        },
        {
            name: 'Section',
            selector: row => row.section,
            sortable: true,
            wrap: true
        },
        {
            name: 'Team Members',
            selector: row => row.teamMembers,
            sortable: true,
            grow: 4,
            wrap: true
        },
        {
            name: 'Domain',
            selector: row => row.domain,
            sortable: true,
            grow: 2,
            wrap: true
        },
        {
            name: 'Project Title',
            selector: row => row.projectTitle,
            sortable: true,
            grow: 2,
            wrap: true
        },
        {
            name: 'Project Abstract',
            selector: row => row.projectAbstract,
            sortable: true,
            wrap: true
        },
        {
            name: 'Event Name',
            selector: row => row.eventName,
            sortable: true,
            wrap: true
        },
    ];

    const [responses, setResponses] = useState([]);
    useEffect(() => {
        getResponses().then(data => {
            setResponses(data)
        })
    }, []);

    const [filterText, setFilterText] = React.useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
        false
    );
    // const filteredItems = data.filter(
    //   item => item.name && item.name.includes(filterText)
    // );
    const filteredItems = responses.filter(
        item =>
            JSON.stringify(item)
                .toLowerCase()
                .indexOf(filterText.toLowerCase()) !== -1
    );

    const subHeaderComponent = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText("");
            }
        };

        return (
            <FilterComponent
                onFilter={e => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
            />
        );
    }, [filterText, resetPaginationToggle]);


    const bgColor = useColorModeValue('gray.50', 'gray.700');
    return (
        <>
            {
                user ?
                    <Stack
                        bg={bgColor}
                        rounded={'xl'}
                        spacing={{ base: 8 }}
                        height={"100%"}
                        maxW={"full"}>
                        <DataTable
                            columns={columns}
                            data={filteredItems}
                            
                            defaultSortField="name"
                            striped
                            pagination
                            subHeader
                            subHeaderComponent={subHeaderComponent}
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