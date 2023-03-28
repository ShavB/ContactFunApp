import { React, Fragment, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper } from '@mui/material';
import { API_BASE_URL } from '../../Services/Constants';
import axios from 'axios';

function preventDefault(event) {
    event.preventDefault();
}

const getURL = API_BASE_URL + "api/Contact";

export default function DataTable() {

    const [contactData, setContactData] = useState({});

    useEffect(() => {
        async function fetchGetData() {
            const response = await axios.get(getURL);
            setContactData(response.data);
        }
        fetchGetData();
    }, [])

    if (!contactData || !Array.isArray(contactData)) {
        return <div>Loading...</div>;
    }

    return (
        <Fragment>
            <TableContainer
                sx={{
                    maxWidth: 800,
                    border: 1,
                }}
                component={Paper}
            >
                <Table aria-label="simple table" size="small" sx={{ borderRadius: 0 }}>
                    <TableHead sx={{ border: 1 }}>
                        <TableRow sx={{ border: 1 }}>
                            <TableCell sx={{ border: 1 }}>Name</TableCell>
                            <TableCell sx={{ border: 1 }}>Phone</TableCell>
                            <TableCell sx={{ border: 1 }}>Email</TableCell>
                            <TableCell sx={{ border: 1 }}>Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contactData.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ border: 1 }}
                            >
                                <TableCell sx={{ border: 1 }}>{row.name}</TableCell>
                                <TableCell sx={{ border: 1 }}>{row.phone}</TableCell>
                                <TableCell sx={{ border: 1 }}>{row.email}</TableCell>
                                <TableCell sx={{ border: 1 }}>{row.address}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
        </Fragment>
    );
}