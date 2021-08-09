import React from "react";
import '../style/CountryCard.css'
import { withRouter } from "react-router-dom";
class CountryCard extends React.Component {
    constructor(props) {
        super(props)
        this.nav = this.nav.bind(this)
    }
    render() {
        return (
            <div className='country-card' onClick={this.nav}>
                <div className='flag' style={{ backgroundImage: "url(" + this.props.country.flag + ")" }}></div>
                <div className='country-details'>
                    <h3>{this.props.country.name}</h3>
                    <p>
                        <b>Population: </b>{this.props.country.population.toLocaleString()}<br />
                        <b>Region: </b>{this.props.country.region}<br />
                        <b>Capital: </b>{this.props.country.capital} <br />
                    </p>
                </div>
            </div >
        )
    }
    nav() {
        this.props.history.push({
            pathname: '/country/' + this.props.country.name,
        })
    }
}

export default withRouter(CountryCard)