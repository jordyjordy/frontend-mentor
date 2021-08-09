import React from "react";
import { withRouter } from "react-router-dom";
import '../style/Detailed.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
class Detailed extends React.Component {
    constructor(props) {
        super(props)
        this.state = { country: { name: "", currencies: [{ name: "test" }], languages: [{ name: 'hi' }], borders: ["AH"] }, id: this.props.match.params.id }
        this.goBack = this.goBack.bind(this)
        this.nav = this.nav.bind(this)
        console.log(this.props)
        this.renderBorderedCountries = this.renderBorderedCountries.bind(this)
        this.loadData = this.loadData.bind(this)
    }
    render() {
        return (
            <div className='detailed'>
                <div className="button-container">
                    <button className='backbutton' onClick={this.goBack}><FontAwesomeIcon icon={faArrowLeft} /> &nbsp;&nbsp;  Back</button>
                </div>
                <div className='detailed-body'>
                    <div className='detailed-flag-container'><img className='detailed-flag' alt={this.state.country?.name} src={this.state.country?.flag} /></div>
                    <div className='detailed-right'>
                        <h1>{this.state.country?.name}</h1>
                        <div className="detailed-details">
                            <div><b>Native Name: </b> {this.state.country?.nativeName}</div>
                            <div><b>Population: </b> {this.state.country?.population}</div>
                            <div><b>Region: </b> {this.state.country?.region}</div>
                            <div><b>Sub Region: </b> {this.state.country?.subregion}</div>
                            <div><b>Capital: </b> {this.state.country?.capital}</div>
                            <div><b>Top Level Domain: </b> {this.state.country?.topLevelDomain}</div>
                            <div><b>Currencies: </b> {this.state.country?.currencies[0].name}</div>
                            <div><b>Languages: </b> {this.state.country?.languages[0].name}</div>
                        </div>
                        <div className="bordered-countries">Border Countries:  {this.renderBorderedCountries()}</div>
                    </div>
                </div>
            </div >
        )
    }

    componentDidMount() {
        this.loadData(this.state.id)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.setState({ id: this.props.match.params.id })
            this.loadData(this.props.match.params.id)
        }
    }
    loadData(id) {
        fetch('https://restcountries.eu/rest/v2/name/' + id + "?fullText=true")
            .then((response) => response.json())
            .then(data => {
                this.setState({ country: data[0] })
            }
            )
    }
    goBack() {
        this.props.history.push('/');
    }
    renderBorderedCountries() {
        return this.state.country?.borders.map(el => {
            const country = this.props.countries?.find(element => element.alpha3Code === el)?.name
            return <button className='borderbutton' key={el} onClick={this.nav}>{country}</button>
        })
    }
    nav(country) {
        this.props.history.push('/country/' + country.target.innerHTML)
    }

}

export default withRouter(Detailed)