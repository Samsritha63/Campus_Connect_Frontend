// StudentDetails.js
import React from 'react';
import { Container, Paper, Typography, Grid } from '@mui/material';

const StudentDetails = () => {
    const student = {
        name: 'John Doe',
        contactNumber: '123-456-7890',
        email: 'john.doe@gmail.com',
        rollNo: 'A123456',
        events: true,
        coupons: false,
    };
    return (

        <Container maxWidth="sm">

            <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Student Details
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">
                            <strong>Name:</strong> {student.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">
                            <strong>Contact Number:</strong> {student.contactNumber}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">
                            <strong>Email ID:</strong> {student.email}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">
                            <strong>Roll No:</strong> {student.rollNo}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">
                            <strong>Participating in Events:</strong> {student.events ? 'Yes' : 'No'}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">
                            <strong>Eligible for Coupons:</strong> {student.coupons ? 'Yes' : 'No'}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default StudentDetails;
