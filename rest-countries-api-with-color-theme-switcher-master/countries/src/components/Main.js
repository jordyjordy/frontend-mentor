import React from "react";
import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar";
import RegionSelect from "./RegionSelect";
import '../style/Main.css'
export class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = { selection: "", region: "" }

        this.getCountries = this.getCountries.bind(this)
        this.changeSearch = this.changeSearch.bind(this)
        this.changeRegion = this.changeRegion.bind(this)
    }

    changeSearch(input) {
        this.setState({ selection: input })
    }

    changeRegion(input) {
        this.setState({ region: input })
    }

    getCountries() 
    {
        return this.props.countries.map((country) => {
            if (country.name?.common.toLowerCase().includes(this.state.selection.toLowerCase()) && (country.region.includes(this.state.region))) {
                return <CountryCard key={country.name.common} country={country} />
            }
            return null
        }
        )
    }

    render() {
        return (
            <div className='main-container'>
                <div className='search-container'>
                    <SearchBar onChangeSearch={this.changeSearch} /> <RegionSelect regionChanged={this.changeRegion} />
                </div>
                <div className='main'>

                    {this.getCountries()}
                </div>
            </div >
        )
    }
}