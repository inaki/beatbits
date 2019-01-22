import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.png';

import {Grid} from '@material-ui/core';

import GoogleAuth from '../GoogleAuth';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <Grid container direction="row" align="center">
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}><img style={{width: 175}} src={logo} alt='logo'/></Grid>
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