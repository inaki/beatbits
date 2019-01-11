import React, { Component, Fragment } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import BeatInputDialog from '../BeatInputDialog';


const styles = {
    fab: {
        margin: 16,
        float: 'right'
    }
};

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
                        <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.handleClickOpen}>
                            <AddIcon />
                        </Fab>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Header);