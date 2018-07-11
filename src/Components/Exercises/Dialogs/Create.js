import React, { Component, Fragment } from 'react';

import {
    Button,
    Dialog,
    DialogActions,
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
        const { open } = this.state;

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
                    {/* <Form>
                    </Form> */}
                </DialogContent>
                <DialogActions>
                    <Button color="primary" variant="raised">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    }
}