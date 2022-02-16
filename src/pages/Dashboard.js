import React, { useEffect, useState } from "react";
import { getResponses } from "../firebase";
import DataTable from 'react-data-table-component';
import {
    Stack,
    Heading,
    Container,
    SimpleGrid,
    useColorModeValue,
} from '@chakra-ui/react';

const Dashboard = () => {

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
    return (
        <>
            <Stack
                bg={useColorModeValue('gray.50', 'gray.700')}
                rounded={'xl'}
                spacing={{ base: 8 }}
                height={"lg"}
                p={2}
                maxW={"full"}>
                <DataTable
                    columns={columns}
                    data={responses}
                />
            </Stack>
        </>
    )
}

export default Dashboard