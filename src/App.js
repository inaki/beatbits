import React, { Component }  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import BeatList from './components/BeatList';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SearchBeats from './components/SearchBeats';
import { withStyles } from '@material-ui/core/styles';
// import { selectBeat } from './actions';

const styles = {
    root: {
        fontFamily: 'Helvetica'
    },
    card: {
      minWidth: 390,
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

    // componentDidMount() {
    //     axios.get('http://localhost:3004/beatcollection')
    //         .then(res => {
    //             this.setState({beatlist: res.data['reggaeton']});
    //         });
        
    // }

    render() {
        const { classes } = this.props;
        const { beatlist } = this.state 
        return (
            <CssBaseline>
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

export default withStyles(styles)(App);