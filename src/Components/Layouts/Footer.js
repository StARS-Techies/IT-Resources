import React from 'react';

import { Paper, Tabs, Tab } from '@material-ui/core';

const footer = (props) => {
    return (
        <Paper>
            <Tabs
                value={0} // default selected tab
                // onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>
        </Paper>
    );
}

export default footer;
