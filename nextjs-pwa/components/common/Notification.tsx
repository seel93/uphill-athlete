import IconButton from "@mui/material/IconButton";
import React, {useEffect} from "react";
import {Alert, Box, Button, Collapse} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface NotificationProps {
    severity: string,
    text : string
}


const Notification = (props : NotificationProps) => {
    const [open, setOpen] = React.useState(true);

    useEffect(() => {
        setTimeout(() => {
            setOpen(false);
        }, 3000);
    }, []);

    return <Box sx={{width: '100%'}}>
        <Collapse in={open}>
            <Alert
                severity={props.severity}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit"/>
                    </IconButton>
                }
                sx={{mb: 2}}
            >
                {props.text}
            </Alert>
        </Collapse>
    </Box>
}

export default Notification;
