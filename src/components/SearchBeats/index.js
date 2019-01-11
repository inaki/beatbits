import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { searchBeatSelect, searchBeatInput } from '../../actions'
import { genres } from '../../utils/variables';

const styles = () => ({
  dense: {
    marginTop: 16,
  },
  menu: {
    // width: 400,
  },
  textField: {
      padding: '0 20px 0 0',
      textAlign: 'left'
  },
  menuItem: {
    //   height: 25
  }
});

class SearchBeats extends Component {

    state = {
        genre: 'All',
        title: ''
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
    }

    handleGenres = (e) => {
        e.preventDefault();
        if(e.target.name === 'select') {
            this.setState({genre: e.target.value, title: ''});
            this.props.searchBeatSelect(e.target.value);
        } else if (e.target.name === 'input') {
            this.setState({title: e.target.value});
            this.props.searchBeatInput(e.target.value);
        }
        
    }

    render() {
        const { classes } = this.props;
        return (
            <form onSubmit={this.handleOnSubmit}>
                <Grid container>
                    <Grid item xs={5}>
                        <TextField
                            label='select genre'
                            fullWidth={true}
                            id="outlined-select-genre"
                            select
                            name='select'
                            className={classes.textField}
                            value={this.state.genre}
                            onChange={this.handleGenres}
                            SelectProps={{
                                MenuProps: {
                                className: classes.menu,
                                },
                            }}
                            margin="normal"
                            variant="outlined"
                            >
                            {genres.map(option => (
                                <MenuItem className={classes.menuItem} key={option.value} value={option.value}>
                                {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            label='title search'
                            name='input'
                            placeholder='enter title of the beat'
                            fullWidth={true}
                            id="outlined-name"
                            className={classes.textField}
                            value={this.state.title}
                            onChange={this.handleGenres}
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
            </form>
        );
    }
}

export default connect(null, {
    searchBeatSelect,
    searchBeatInput
})(withStyles(styles)(SearchBeats));
