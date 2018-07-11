import React from 'react';

import { Paper, Tabs, Tab } from '@material-ui/core';

const footer = (props) => {
    return (
        <Paper>
            <Tabs
                value={0} // default selected tab
                onChange={this.props.onSelect}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="All" />
                {props.muscles.map(group =>
                    <Tab label={group} key={group} />
                )}
            </Tabs>
        </Paper>
    );
}

export default footer;
