import React from 'react';
import { Avatar, CssBaseline, Container, Typography } from "@mui/material"
import avatar from '../assets/cyberpepe.webp';
import useStyles from '../styles/muiStyles.jsx'

export class Info extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className="InfoContainer">
                    <Avatar src={avatar} alt="loh" size="lg" />
                    <Typography variant="h3">Info</Typography>
                </Container>
            </React.Fragment>
        );
    }
}