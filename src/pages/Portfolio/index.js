import React from 'react';
import project1 from '../../images/burger-meister-gif.gif';
import project2 from '../../images/jotter.gif';
import project3 from '../../images/inspirit.JPG';
import project4 from '../../images/read.gif';
import project5 from '../../images/overYonder.gif';
import project6 from '../../images/myFamiliar.png';
import avatar from '../../images/avatar.png';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WebIcon from '@material-ui/icons/Web';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import Typography from '@material-ui/core/Typography';
import indigo from '@material-ui/core/colors/indigo';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,
        margin: "5rem auto",
        backgroundColor: '#fbe9e7',

    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        padding: 24,
    },
    avatar: {
        width: 50,
        height: 50,
        border: '2px solid #fff',
        margin: '-48px 32px 0 auto',
        '& > img': {
            margin: 0,
        }
    },
    heading: {
        padding: "4rem 0",
    }

}));

const Portfolio = React.memo(function PostCard() {

    const cardStyles = useStyles();
    const mediaStyles = useSlopeCardMediaStyles();
    const shadowStyles = useSoftRiseShadowStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();

    return (
        <>
            <Box component="div">
                <Typography component="header" className={cardStyles.heading} variant="h4" align="center"
                    style={{ color: indigo[800] }}> PORTFOLIO </Typography>
                <Grid container justify="center">

                    <Grid spacing={2} item xs={12} sm={8} md={4}>
                        <Card className={cx(cardStyles.root, shadowStyles.root)}>
                            <CardMedia
                                classes={mediaStyles}
                                image={project3}
                            />
                            <Avatar className={cardStyles.avatar} src={avatar} />
                            <CardContent className={cardStyles.content}>
                                <TextInfoContent
                                    classes={textCardContentStyles}
                                    heading={'Inspirit'}
                                    body={
                                        'A dynamic, full stack, MERN e-commerce site. Users are authenticated with JWT and finalize purchases with the stripe. Admin have the ability to add and delete inventory items. The Root user contains admin permissions as well as the ability to assign user roles.'
                                    }
                                />
                            </CardContent>
                            <Box px={2} pb={2} mt={-1}>
                                <Tooltip title="LinkedIn">
                                    <IconButton Link color="inherit" href="https://www.linkedin.com/in/aaivey">
                                        <LinkedInIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="GitHub Repository">
                                    <IconButton Link color="inherit" href="https://github.com/aaivey22/inspirit2.0">
                                        <GitHubIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Live Demo">
                                    <IconButton Link color="inherit" href="https://evening-citadel-47188.herokuapp.com">
                                        <WebIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={4}>
                        <Card className={cx(cardStyles.root, shadowStyles.root)}>
                            <CardMedia
                                classes={mediaStyles}
                                image={project1}
                            />
                            <Avatar className={cardStyles.avatar} src={avatar} />
                            <CardContent className={cardStyles.content}>
                                <TextInfoContent
                                    classes={textCardContentStyles}
                                    heading={'The Burger-Meister'}
                                    body={
                                        'A dynamic and fun web app where users create a burger "wish-list" and then "devour" said burgers to "cross them off" the wish-list. This app features JS ES6, Node.js, MySQL, Express, Handlebars and a homemade ORM.'
                                    }
                                />
                            </CardContent>
                            <Box px={2} pb={2} mt={-1}>
                                <Tooltip title="LinkedIn">
                                    <IconButton Link color="inherit" href="https://www.linkedin.com/in/aaivey">
                                        <LinkedInIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="GitHub Repository">
                                    <IconButton Link color="inherit" href="https://github.com/aaivey22/Burger-Meister">
                                        <GitHubIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Live Demo">
                                    <IconButton Link color="inherit" href="https://agile-sierra-80993.herokuapp.com">
                                        <WebIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={4}>
                        <Card className={cx(cardStyles.root, shadowStyles.root)}>
                            <CardMedia
                                classes={mediaStyles}
                                image={project2}
                            />
                            <Avatar className={cardStyles.avatar} src={avatar} />
                            <CardContent className={cardStyles.content}>
                                <TextInfoContent
                                    classes={textCardContentStyles}
                                    heading={'Jotter'}
                                    body={
                                        'A web app for writing, saving, updating, and deleting personal notes using an Express server to save and retrieve note data from a JSON file.'
                                    }
                                />
                            </CardContent>
                            <Box px={2} pb={2} mt={-1}>
                                <Tooltip title="LinkedIn">
                                    <IconButton Link color="inherit" href="https://www.linkedin.com/in/aaivey">
                                        <LinkedInIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="GitHub Repository">
                                    <IconButton Link color="inherit" href="https://github.com/aaivey22/Jotter">
                                        <GitHubIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="GitHub Page">
                                    <IconButton Link color="inherit" href="https://aaivey22.github.io/Jotter">
                                        <WebIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={4}>
                        <Card className={cx(cardStyles.root, shadowStyles.root)}>
                            <CardMedia
                                classes={mediaStyles}
                                image={project5}
                            />
                            <Avatar className={cardStyles.avatar} src={avatar} />
                            <CardContent className={cardStyles.content}>
                                <TextInfoContent
                                    classes={textCardContentStyles}
                                    heading={'Over Yonder'}
                                    body={
                                        'A web app that gathers the user location and user inputs to provide information on nearby hiking trails.'
                                    }
                                />
                            </CardContent>
                            <Box px={2} pb={2} mt={-1}>
                                <Tooltip title="LinkedIn">
                                    <IconButton Link color="inherit" href="https://www.linkedin.com/in/aaivey">
                                        <LinkedInIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="GitHub Repository">
                                    <IconButton Link color="inherit" href="https://github.com/childovhurin/over-yonder">
                                        <GitHubIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Live Demo">
                                    <IconButton Link color="inherit" href="https://agile-sierra-80993.herokuapp.com">
                                        <WebIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={4}>
                        <Card className={cx(cardStyles.root, shadowStyles.root)}>
                            <CardMedia
                                classes={mediaStyles}
                                image={project6}
                            />
                            <Avatar className={cardStyles.avatar} src={avatar} />
                            <CardContent className={cardStyles.content}>
                                <TextInfoContent
                                    classes={textCardContentStyles}
                                    heading={'My Familiar'}
                                    body={
                                        'A complex web app featuring an RPG character generator form. Users are able to create new characters and access previously generated characters. Data is stored in a MySQL database.'
                                    }
                                />
                            </CardContent>
                            <Box px={2} pb={2} mt={-1}>
                                <Tooltip title="LinkedIn">
                                    <IconButton Link color="inherit" href="https://www.linkedin.com/in/aaivey">
                                        <LinkedInIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="GitHub Repository">
                                    <IconButton Link color="inherit" href="https://github.com/childovhurin/My-Familiar">
                                        <GitHubIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Live Demo">
                                    <IconButton Link color="inherit" href="https://murmuring-harbor-07987.herokuapp.com">
                                        <WebIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={4}>
                        <Card className={cx(cardStyles.root, shadowStyles.root)}>
                            <CardMedia
                                classes={mediaStyles}
                                image={project4}
                            />
                            <Avatar className={cardStyles.avatar} src={avatar} />
                            <CardContent className={cardStyles.content}>
                                <TextInfoContent
                                    classes={textCardContentStyles}
                                    heading={'Budget Buddy'}
                                    body={
                                        'An online/offline React app that easily allows users to track their finances with standalone capabilities. Featuring JS ES6, Node.js, React, MongoDB, and Express.'
                                    }
                                />
                            </CardContent>
                            <Box px={2} pb={2} mt={-1}>
                                <Tooltip title="LinkedIn">
                                    <IconButton Link color="inherit" href="https://www.linkedin.com/in/aaivey">
                                        <LinkedInIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="GitHub Repository">
                                    <IconButton Link color="inherit" href="https://github.com/aaivey22/budget-buddy">
                                        <GitHubIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Live Demo">
                                    <IconButton Link color="inherit" href="https://immense-depths-26657.herokuapp.com">
                                        <WebIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Card>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
});


export default Portfolio;