import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import {Grid, Card, CardContent} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import { withStyles } from '@material-ui/core/styles';

import BeatList from './components/BeatList';
import SearchBeats from './components/SearchBeats';
import Header from './components/Header';

const styles = {
    root: {
        fontFamily: 'Roboto'
    },
    card: {
      minWidth: 565,
      margin: 10
    }
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beatSearchTerm: '',
            beatlist: []
        }
    }

    render() {
        const { classes } = this.props;
        const { beatlist } = this.state 
        return (
            <CssBaseline>
                <Header />
                <Grid container direction="column" align="center">
                    <Grid item xs={12}>
                        <Card className={classes.card}>
                            <CardContent>
                                <SearchBeats />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <BeatList beatlist={beatlist}/>
            </CssBaseline>
        )
    }
};

App.propTypes = {
    classes: PropTypes.object
}

export default withStyles(styles)(App);