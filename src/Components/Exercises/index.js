import React, { Fragment } from 'react';

import Form from './Form';

import {
    Grid,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
} from '@material-ui/core';

import {
    Delete, Edit
} from '@material-ui/icons';

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'
    }
}

// use object destructuring to get props directly from props
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
export default ({
    exercises, exercise, muscles, category, editMode,
    onSelect, onDelete, onSelectEdit, onEdit,
    exercise: {
        id,
        title = 'Welcome!',
        description = 'Please select an exercise from the list on the left.'
    }
}) =>
    <Grid container spacing={8}>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {/* more array destructuring */}
                {exercises.map(([group, exercises]) =>
                    !category || category === group
                        ? <Fragment key={group}>
                                <Typography
                                    variant="headline"
                                    style={{textTransform: 'capitalize'}}
                                >
                                    {group}
                                </Typography>
                                <List component="ul">
                                    {/* more object destructuring */}
                                    {exercises.map(({ id, title }) =>
                                        <ListItem
                                            button
                                            onClick={() => onSelect(id)}
                                             key={id}
                                        >
                                            <ListItemText primary={title} />
                                            <ListItemSecondaryAction>
                                                <IconButton onClick={() => onSelectEdit(id)}>
                                                    <Edit />
                                                </IconButton>
                                                <IconButton onClick={() => onDelete(id)}>
                                                    <Delete />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    )}
                                </List>
                            </Fragment>
                        : null
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {editMode
                ? <Form
                        muscles={muscles}
                        onSubmit={onEdit}
                        exercise={exercise}
                    />
                : <Fragment>
                    <Typography
                        variant="display1"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="subheading"
                        style={{marginTop: 20}}
                    >
                        {description}
                    </Typography>
                </Fragment>}
            </Paper>
        </Grid>
    </Grid>