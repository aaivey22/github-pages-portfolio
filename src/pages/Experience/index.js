import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import SchoolIcon from '@material-ui/icons/School';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import StarsIcon from '@material-ui/icons/Stars';
import Paper from '@material-ui/core/Paper';
import { Typography, Box } from '@material-ui/core';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo';


// const noColor = "#66000000"
// const peachy = "#ffcca6"
// const grape = "#615ebd"


const useStyles = makeStyles(theme => ({
    paper: {
        padding: '6px 16px',
        backgroundColor: '#fbe9e7',
    },
    secondaryTail: {
        backgroundColor: '#615ebd',
    },
    heading: {
        padding: "4rem 0",
    }
}));

export default function Experience() {
    const classes = useStyles();


    return (
        <>
            <Box component="header" className={classes.heading} style={{ color: indigo[800] }}>
                <Typography variant="h4" align="center"> DEVELOPMENT EXPERIENCE </Typography>
                <Timeline align="alternate">

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                {/* additional subtext option*/}
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <LaptopMacIcon style={{ color: deepOrange[200] }} />
                            </TimelineDot>
                            <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={10} className={classes.paper}>
                                <Typography variant="h6">
                                    Code
                </Typography>
                                <Typography variant="subtitle1">Because it&apos;s awesome!</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <StarsIcon style={{ color: deepPurple[100] }} />
                            </TimelineDot>
                            <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={10} className={classes.paper}>
                                <Typography variant="h6">
                                    Coding-Bootcamp Certificate of Completion 2020
                </Typography>
                                <Typography variant="subtitle1">University of Richmond 6 month coding bootcamp</Typography>
                                <Typography>
                                    HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js,
                                    Progressive Web Apps, Agile Methodology, Database Theory, MongoDB, MySQL, Git
                </Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <SchoolIcon style={{ color: deepOrange[200] }} />
                            </TimelineDot>
                            <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={10} className={classes.paper}>
                                <Typography variant="h6">
                                    B.S. Software Development 2019 - 2021
                </Typography>
                                <Typography variant="subtitle1">Western Governors University Online</Typography>
                                <Typography>Computer Programming, Web Development, Application Development</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <StarsIcon style={{ color: deepPurple[100] }} />
                            </TimelineDot>
                            <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={10} className={classes.paper}>
                                <Typography variant="h6">
                                    ITIL Certified 2019
                </Typography>
                                <Typography variant="subtitle1">Foundation to IT Infrastructure Library (ITIL)</Typography>
                                <Typography>
                                    Enhances IT service management quality within an organization
                </Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <StarsIcon style={{ color: deepOrange[200] }} />
                            </TimelineDot>
                            <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={10} className={classes.paper}>
                                <Typography variant="h6">
                                    CompTIA Project+ Certified 2019
                </Typography>
                                <Typography variant="subtitle1">Project Management</Typography>
                                <Typography>
                                    Project Life Cycle Management, Communication, Resources & Stakeholder Management, Project Documentation
                </Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <StarsIcon style={{ color: deepPurple[100] }} />
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={10} className={classes.paper}>
                                <Typography variant="h6">
                                    MTA Certified 2019
                </Typography>
                                <Typography variant="subtitle1">HTML5 Application Development Fundamentals</Typography>
                                <Typography>Application Lifecycle Management, HTML5 Build UI, HTML5 Technology, Javascript, UI CSS Formatting</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box>
        </>
    );
}
