import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: '#3f51b5',
        },
        "& label": {
            color: '#615ebd',
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: '#615ebd',
            },
            "&:hover fieldset": {
                borderColor: '#615ebd',
            },
            "&.Mui-focused fieldset": {
                borderColor: '#615ebd',
            }
        }
    }
})(TextField);

const useStyles = makeStyles((theme) => ({
    form: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: "absolute",
        backgroundColor: '#fbe9e7',
        padding: '3rem',
        opacity: '100%',
    },
    button: {
        marginTop: '1rem',
        color: '#ffab91',
        backgroundColor: '#615ebd',
        borderColor: '#615ebd'
    }
}));

const Contact = () => {
    const classes = useStyles();

    return (
        <Box component="div">
            <Grid container justify="center">
                <Card component="form" elevation={10} className={classes.form}>
                    <CardContent>
                        <Typography variant="h5" style={{ color: '#283593' }}>CONTACT ME</Typography>
                        <InputField fullWidth={true} inputProps={{ style: { color: "#615ebd" } }}
                            label="Name" placeholder="First & Last Name" variant="outlined" margin="dense" size="medium" />
                        <br />
                        <InputField fullWidth={true} inputProps={{ style: { color: "#615ebd" } }}
                            label="Email" placeholder="Your Email Address" variant="outlined" margin="dense" size="medium" />
                        <br />
                        <InputField fullWidth={true} inputProps={{ style: { color: "#615ebd" } }}
                            label="Company" placeholder="Affiliated Company Name" variant="outlined" margin="dense" size="medium" />
                        <br />
                        <Button className={classes.button}
                            href="mailto:angelawings22@yahoo.com"
                            variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
                            Send
                    </Button>
                    </CardContent>
                </Card>
            </Grid>
        </Box>
    )
}

export default Contact;
