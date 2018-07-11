import React, { Fragment } from 'react';

import {
    Grid, Paper, Typography, List, ListItem, ListItemText
} from '@material-ui/core';


const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'
    }
}

export default props =>
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {props.exercises.map((group, exercises) =>
                    <Fragment key={group[0]}>
                        <Typography
                            variant="headline"
                            style={{textTransform: 'capitalize'}}
                        >
                            {group[0]}
                        </Typography>
                        <List component="ul">
                            {group[1].map(exercise =>
                                <ListItem button key={exercise.id}>
                                    <ListItemText primary={exercise.title} />
                                </ListItem>
                            )}
                        </List>
                    </Fragment>
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography
                    variant="display1"
                >
                    Welcome!
                </Typography>
                <Typography
                    variant="subheading"
                    style={{marginTop: 20}}
                >
                    Please select an exercise from the list on the left.
                </Typography>
            </Paper>
        </Grid>
    </Grid>