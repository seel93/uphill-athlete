import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ReactNode} from "react";

interface ContentAccordionProps {
    summary: string;
    childComponent: ReactNode;
}


const ContentAccordion = (props : ContentAccordionProps) => {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{props.summary}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {props.childComponent}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default ContentAccordion;

