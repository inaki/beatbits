import React, { Component } from 'react';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

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
  textField: {}
});

const genres = [
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
    value: 'Raggeaton'
  },
  {
    value: 'Hip Hop'
  },
  {
    value: 'Electronica'
  },
];


class SearchBeats extends Component {

    state = {
        genre: 'Techno'
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
    }

    handleGenres = (e) => {
        e.preventDefault();
    }

    render() {
        const { classes } = this.props;
        return (
            <form onSubmit={this.handleOnSubmit}>
                <TextField
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
                <TextField
                    id="outlined-name"
                    className={classes.textField}
                    value={this.state.searchTerm}
                    onChange={this.handleGenres}
                    margin="normal"
                    variant="outlined"
                />
            </form>
        );
    }
}

export default withStyles(styles)(SearchBeats);
