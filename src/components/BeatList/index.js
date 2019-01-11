import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBeat, fetchBeats } from '../../actions';
import BeatCard from '../BeatCard';
import DetailsDialog from '../DetailsDialog';
import Grid from '@material-ui/core/Grid';

class BeatList extends Component {

    state = {
        open: false,
        beats: []
      };
    
    componentDidMount() {
        this.props.fetchBeats();
    }
      
    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = value => {
        this.setState({ selectedValue: value, open: false });
    };
    
    renderBeatList = (beats) => {
        return beats
            .filter( beat => {
                if (this.props.beatsSearch !== null) {
                    if (this.props.beatsSearch.type === 'select') {
                        if (this.props.beatsSearch.genre === 'All') {
                            return true;
                        } else {
                            return this.props.beatsSearch.genre.toLowerCase() === beat.genre.toLowerCase();
                        }
                    } else if (this.props.beatsSearch.type === 'input') {
                        return beat.title.toLowerCase().includes(this.props.beatsSearch.title);
                    }
                }
                return true
            })
            .map( beat => {
                return (
                    <Grid item
                        xs={12}
                        key={beat.id}
                        align="left">
                        <BeatCard
                            handleSelect={() => {
                                this.props.selectBeat(beat);
                                this.handleClickOpen();
                            }}
                            {...beat}/>
                    </Grid>
                    );
            });   
    }
    render() {
        const { selectedBeat, beats } = this.props;
        return (
            <div>
                { selectedBeat && 
                    <DetailsDialog
                    selectedBeat={selectedBeat}
                    selectedValue={this.state.selectedValue}
                    open={this.state.open}
                    onClose={this.handleClose}
                />
                }
                <Grid container direction="column" align="center">
                        { this.renderBeatList(beats)}
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        beats: state.beats,
        selectedBeat: state.selectedBeat,
        beatsSearch: state.beatsSearch
    };
}

export default connect(mapStateToProps, {
    selectBeat,
    fetchBeats
})(BeatList);