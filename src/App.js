import React, { Component }  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import BeatList from './components/BeatList';
import axios from 'axios';
// import { selectBeat } from './actions';

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
        const { beatlist } = this.state 
        return (
            <CssBaseline>
                <BeatList beatlist={beatlist}/>
            </CssBaseline>
        )
    }
};

export default App;