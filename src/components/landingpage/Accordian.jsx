import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import AccordionSummary from '@mui/material/AccordionSummary';







export default function AccordianLists() {
    const [expanded, setExpanded] = React.useState('panel1');
    console.log(expanded)

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),

    }));

    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        // border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&::before': {
            display: 'none',
        },
    }));
    // const AccordionSummary = styled((props) => (

    //     <MuiAccordionSummary
    //         expandIcon={
    //             <FaPlus />
    //             // <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />
    //             //expanded === 'panel1' ? <FaMinus />:<FaPlus />
    //         }
    //         {...props}
    //     />
    // ))(({ theme }) => ({
    //     backgroundColor:
    //         theme.palette.mode === 'dark'
    //             ? 'rgba(255, 255, 255, .05)'
    //             : 'rgba(0, 0, 0, .03)',
    //     flexDirection: 'row',
    //     // '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    //     //     transform: 'rotate(90deg)',
    //     //   },
    //     //   '& .MuiAccordionSummary-content': {
    //     //     marginLeft: theme.spacing(1),
    //     //   },

    // }));


    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className='flex gap-4 flex-col justify-center'>
            <Accordion
                expanded={expanded === 'panel1'}
                sx={expanded === 'panel1' ? {
                    borderLeft: '1px solid rgba(0, 0, 0, .125)',
                    borderRight: '1px solid rgba(0, 0, 0, .125)',
                    borderTop: '1px solid rgba(0, 0, 0, .125)',
                } : {}}
                onChange={handleChange('panel1')}>
                <AccordionSummary
                    aria-controls="panel1d-content"
                    expandIcon={expanded === 'panel1' ? <FaMinus /> : <FaPlus />}
                    id="panel1d-header">
                    <Typography>Why should I use Butter?</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={expanded === 'panel1' ? {
                        borderLeft: '1px solid rgba(0, 0, 0, .125)',
                        borderRight: '1px solid rgba(0, 0, 0, .125)',
                        borderBottom: '1px solid rgba(0, 0, 0, .125)',
                    } : {}}
                >
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                sx={expanded === 'panel2' ? {
                    borderLeft: '1px solid rgba(0, 0, 0, .125)',
                    borderRight: '1px solid rgba(0, 0, 0, .125)',
                    borderTop: '1px solid rgba(0, 0, 0, .125)',
                } : {}}
                expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content"
                    expandIcon={expanded === 'panel2' ? <FaMinus /> : <FaPlus />}
                    id="panel2d-header">
                    <Typography>Why should I use Butter?</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={expanded === 'panel2' ? {
                        borderLeft: '1px solid rgba(0, 0, 0, .125)',
                        borderRight: '1px solid rgba(0, 0, 0, .125)',
                        borderBottom: '1px solid rgba(0, 0, 0, .125)',
                    } : {}}
                >
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                sx={expanded === 'panel3' ? {
                    borderLeft: '1px solid rgba(0, 0, 0, .125)',
                    borderRight: '1px solid rgba(0, 0, 0, .125)',
                    borderTop: '1px solid rgba(0, 0, 0, .125)',
                } : {}}
                expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary

                    expandIcon={expanded === 'panel3' ? <FaMinus /> : <FaPlus />}
                    aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Why should I use Butter?</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={expanded === 'panel3' ? {
                        borderLeft: '1px solid rgba(0, 0, 0, .125)',
                        borderRight: '1px solid rgba(0, 0, 0, .125)',
                        borderBottom: '1px solid rgba(0, 0, 0, .125)',
                    } : {}}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                sx={expanded === 'panel4' ? {
                    borderLeft: '1px solid rgba(0, 0, 0, .125)',
                    borderRight: '1px solid rgba(0, 0, 0, .125)',
                    borderTop: '1px solid rgba(0, 0, 0, .125)',
                } : {}}
                expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary

                    expandIcon={expanded === 'panel4' ? <FaMinus /> : <FaPlus />}
                    aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Why should I use Butter?</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={expanded === 'pane4' ? {
                        borderLeft: '1px solid rgba(0, 0, 0, .125)',
                        borderRight: '1px solid rgba(0, 0, 0, .125)',
                        borderBottom: '1px solid rgba(0, 0, 0, .125)',
                    } : {}}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}