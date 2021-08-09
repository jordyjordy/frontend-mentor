import React from "react";
import '../style/SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.onChangeSearch(event.target.value)
    }
    render() {
        return (
            <label className='searchbar' htmlFor='countrysearch'>
                <i className="coffee"></i>
                <FontAwesomeIcon icon={faSearch} />
                <input id="countrysearch" type='text' placeholder="Search for a country..." onChange={this.handleChange} />
            </label>
        )
    }
}