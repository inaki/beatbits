import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import {Grid} from '@material-ui/core';

import BeatInputDialog from '../BeatInputDialog';
import GoogleAuth from '../GoogleAuth';

class Header extends Component {
    state = {
        open: false
    }

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = value => {
        this.setState({ open: false });
    };
    
    render() {
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
                        <GoogleAuth handleClickOpen={this.handleClickOpen} />
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object
}

export default Header;