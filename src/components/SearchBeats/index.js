import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { searchBeat } from '../../actions'

const styles = () => ({
  textField: {
    // marginLeft: 160,
    // marginRight:16,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    // width: 400,
  },
  textField: {
      padding: 20,
      textAlign: 'left'
  }
});

const genres = [
    {
        value: 'All'
    },
    {
        value: 'Techno'
    },
    {
        value: 'House'
    },
    {
        value: 'Deep House'
    },
    {
        value: 'Reggaeton'
    },
    {
        value: 'Hip Hop'
    },
    {
        value: 'Electronica'
    },
    {
        value: 'Pop'
    }
];


class SearchBeats extends Component {

    state = {
        genre: 'All'
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
    }

    handleGenres = (e) => {
        e.preventDefault();
        this.setState({genre: e.target.value});
        this.props.searchBeat(e.target.value);
    }

    render() {
        const { classes } = this.props;
        return (
            <form onSubmit={this.handleOnSubmit}>
                <Grid container>
                    <Grid item xs={5}>
                        <TextField
                            fullWidth={true}
                            id="outlined-select-genre"
                            select
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
                                <MenuItem key={option.value} value={option.value}>
                                {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            placeholder='enter title of the beat'
                            fullWidth={true}
                            id="outlined-name"
                            className={classes.textField}
                            value={this.state.searchTerm}
                            onChange={this.handleGenres}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
            </form>
        );
    }
}

export default connect(null, {
    searchBeat
})(withStyles(styles)(SearchBeats));
