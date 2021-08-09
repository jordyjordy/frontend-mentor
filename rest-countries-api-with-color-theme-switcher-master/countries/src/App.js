import './App.css'
import { Switch, Route, BrowserRouter } from "react-router-dom"
import { Header } from './components/Header'
import { Main } from './components/Main';
import Detailed from './components/Detailed'
import React from 'react';
export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { countries: [{}], id: "" }
    this.countrySelected = this.countrySelected.bind(this)
  }
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <BrowserRouter>
            <div>
              <Switch>
                <Route exact path="/country/:id" render={() => {
                  return (<Detailed countries={this.state.countries} />)
                }} />
                <Route path="/" render={() => <Main countries={this.state.countries} countrySelected={this.countrySelected} />} />
              </Switch>
            </div>
          </BrowserRouter>
        </main>
      </div>
    );
  }

  countrySelected(id) {
    this.setState({ id: id })
  }

  async componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then(data => {
        console.log(data)
        this.setState({ countries: data })
      }
      )
  }

}
