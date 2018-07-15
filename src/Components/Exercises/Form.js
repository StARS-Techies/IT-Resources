import React, { Component } from 'react';

import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    withStyles,
    Button
} from '@material-ui/core';

const styles = theme => ({
    FormControl: {
        width: 300
    }
})

export default withStyles(styles)(class extends Component {
    state = this.getInitState()

    getInitState() {
        const { exercise } = this.props;

        return exercise ? exercise : {
            title: '',
            description: '',
            muscles: ''
        }
    }

    handleChange = name => ({ target: {value } }) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        // TODO: validations

        this.props.onSubmit({
            ...this.state,
            id: this.state.title.toLocaleLowerCase().replace(/ /g, '-')
        });

        this.setState({
            open: false,
            title: '',
            description: '',
            muscles: ''
        })
    }

    render() {
        const { title, description, muscles } = this.state,
            { classes, muscles: categories } = this.props;

        return <form>
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
                onChange={this.handleSubmit('description')}
                margin="normal"
            />
            <br />
            <Button
                color="primary"
                onClick={this.handleSubmit}
                variant="raised"
            >
                Create
            </Button>
        </form>
    }
})