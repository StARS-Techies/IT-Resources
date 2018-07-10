import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';

const header = (props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="headline" color="inherit">
                    Exercise Database
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default header;
