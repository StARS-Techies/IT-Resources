import React, { Component, Fragment } from 'react';

import Form from './Form';

import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';

import {
    Add
} from '@material-ui/icons';

export default class extends Component {
    state = {
        open: false
    }

    toggleHandler = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const { open } = this.state,
            { muscles, onCreate } = this.props;

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
                    <Form
                        muscles={muscles}
                        onSubmit={onCreate}
                    />
                </DialogContent>
            </Dialog>
        </Fragment>
    }
}