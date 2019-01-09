import React, { Component } from 'react';

class SearchBeats extends Component {

    handleOnSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <select>
                    <option value="techno">techno</option>
                    <option value="house">house</option>
                    <option value="funk">funk</option>
                    <option value="hip hop">hip hop</option>
                    <option value="reggaeton">reggaeton</option>
                </select>
                <input type="text"/>
            </form>
        );
    }
}

export default SearchBeats;
