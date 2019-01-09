import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBeat } from '../../actions';
import BeatCard from '../BeatCard';
import DetailsDialog from '../DetailsDialog';
import Grid from '@material-ui/core/Grid';


const emails = ['username@gmail.com', 'user02@gmail.com'];

class BeatList extends Component {

    state = {
        open: false,
        selectedValue: emails[1],
      };
      
      handleClickOpen = () => {
        this.setState({
          open: true,
        });
      };
    
      handleClose = value => {
        this.setState({ selectedValue: value, open: false });
      };
    
    renderBeatList = (beats) => {
        return beats.map( beat => {
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
        const { beats, selectedBeat } = this.props;
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
        selectedBeat: state.selectedBeat
    };
}

export default connect(mapStateToProps, {
    selectBeat
})(BeatList);