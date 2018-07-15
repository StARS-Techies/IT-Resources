import React, { Component, Fragment } from 'react';

import {
    Button, TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    withStyles
} from '@material-ui/core';

import {
    Add
} from '@material-ui/icons';

const styles = theme => ({
    FormControl: {
        width: 500
    }
})

export default withStyles(styles)(class extends Component {
    state = {
        open: false,
        exercise: {
            title: '',
            description: '',
            muscles: ''
        }
    }

    toggleHandler = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleChange = name => ({ target: {value } }) => {
        this.setState({
            exercise: {
                ...this.state.exercise,
                [name]: value
            }
        })
    }

    handleSubmit = (event) => {
        // TODO: validations

        const { exercise } = this.state;

        this.props.onCreate({
            ...exercise,
            id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
        });

        this.setState({
            open: false,
            exercise: {
                title: '',
                description: '',
                muscles: ''
            }
        })
    }

    render() {
        const {
            open,
            exercise: { title, description, muscles}
        } = this.state, {
            classes,
            muscles: categories
        } = this.props;

        return <Fragment>
            <Button variant="fab" onClick={this.toggleHandler} mini>
                <Add/>
            </Button>

            <Dialog
                open={open}
                onClose={this.toggleHandler}
            >
                <DialogTitle id="form-dialog-title">
                    Create a new exercise
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the form below.
                    </DialogContentText>
                    <form>
                        <TextField
                            className={classes.FormControl}
                            label="Title"
                            value={title}
                            onChange={this.handleChange('title')}
                            margin="normal"
                        />
                        <br />
                        <FormControl className={classes.FormControl}>
                            <InputLabel htmlFor="muscles">
                                Muscles
                            </InputLabel>
                            <Select
                                value={muscles}
                                onChange={this.handleChange('muscles')}
                            >
                                {categories.map(category =>
                                    <MenuItem value={category} key={category}>
                                        {category}
                                    </MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        <br />
                        <TextField
                            className={classes.FormControl}
                            multiline
                            rows="4"
                            label="Description"
                            value={description}
                            onChange={this.handleChange('description')}
                            margin="normal"
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button
                        color="primary"
                        onClick={this.handleSubmit}
                        variant="raised"
                    >
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    }
})