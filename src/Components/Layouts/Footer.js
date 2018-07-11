import React from 'react';

import { Paper, Tabs, Tab } from '@material-ui/core';

// more object destructuring
const footer = ({ category, muscles, onSelect}) => {
    const index = category
        ? muscles.findIndex(group => group === category) + 1
        : 0

    const onIndexSelectHandler = (e, index) =>
        onSelect(index === 0 ? '' : muscles[index - 1])

    return (
        <Paper>
            <Tabs
                value={index} // default selected tab
                onChange={onIndexSelectHandler}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="All" />
                {muscles.map(group =>
                    <Tab label={group} key={group} />
                )}
            </Tabs>
        </Paper>
    );
}

export default footer;
