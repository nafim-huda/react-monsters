import { Component } from "react";

import './search-box.styles.css';

class SearchBox extends Component {
    render() {   
        return (
            <input 
            className={`search-box ${this.props.className}`}
            type='search'
            placeholder={this.props.placeholder}
            // onChange is a callback that is called when there is an update to our input
            // we want to bind an onChange handler for dealing with user input 
            onChange={this.props.onChangeHandler}
           />
        )
    }
}

export default SearchBox