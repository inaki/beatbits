import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import BeatList from './components/BeatList';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SearchBeats from './components/SearchBeats';
import { withStyles } from '@material-ui/core/styles';
import Header from './components/Header';
// import { selectBeat } from './actions';

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