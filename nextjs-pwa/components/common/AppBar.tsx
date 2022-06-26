import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useUser } from '@auth0/nextjs-auth0';

const color = {
    backgroundColor: "#19646A"
}

const appBar = () => {

    const { user } = useUser();


    return (
        <Box sx={{flexGrow: 1}} style={color}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Uphill athlete
                    </Typography>
                    {!user ? <a href="/api/auth/login"> log inn </a> : <a href="/api/auth/logout"> log out </a>}
                    {/*<Button color="inherit" onClick={() => null}>log inn</Button>*/}
                    {/*<Button color="inherit" onClick={() => null}>log out</Button>*/}

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default appBar;
