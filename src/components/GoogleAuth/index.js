import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';
import { GoogleKeys } from '../../env.js';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: GoogleKeys.clientId,
                scope: 'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    }

    renderAuthButton() {
        const { classes } = this.props;
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return <Button onClick={this.onSignOutClick} color="primary" className={classes.button}>
                logout
            </Button>
        } else {
            return <Button onClick={this.onSignInClick} color="primary" className={classes.button}>
                login
            </Button>
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    render() {
        return (
            <Fragment>
                {this.renderAuthButton()}
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {
    signIn,
    signOut
})(withStyles(styles)(GoogleAuth));