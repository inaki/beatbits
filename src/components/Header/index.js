import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import {Grid, Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { withStyles } from '@material-ui/core/styles';

import BeatInputDialog from '../BeatInputDialog';
import GoogleAuth from '../GoogleAuth';

const styles = {
    fab: {
        margin: 16,
        float: 'right'
    }
};

class Header extends Component {
    state = {
        open: false,
        signedIn: null
    }

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = value => {
        this.setState({ open: false });
    };
    
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                { this.state.open && 
                    <BeatInputDialog 
                        open={this.state.open}
                        onClose={this.handleClose}/>
                }
                <Grid container direction="row" align="center">
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>BeatBits</Grid>
                    <Grid item xs={1}>
                        { this.state.signedIn
                            ? <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.handleClickOpen}>
                                    <AddIcon />
                              </Fab>
                            : <GoogleAuth />
                        }
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object
}

export default withStyles(styles)(Header);