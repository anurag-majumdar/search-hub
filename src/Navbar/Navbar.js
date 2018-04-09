import React from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
// import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

export function Navbar(props) {

    // const { classes } = props;
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <Icon>
                            menu
                        </Icon>
                    </IconButton>
                    <Typography variant="title" color="inherit">
                        SearchHub
                        </Typography>
                    {/* <Button color="inherit">SignUp</Button>
                    <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}