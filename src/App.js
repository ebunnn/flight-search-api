import React, {Component} from 'react'; 
import './App.css';
import Header from './Header';
import Footer from './Footer';
import BrowseDates from './BrowseDates';

class App extends Component {
  constructor() {
    super()
    this.state = {
      eachPlace: [],
      query: "",
      currency: "",
      eachCurrency: [],
      eachDate: [],
      eachQuote: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.apiCall = this.apiCall.bind(this)
  }
  handleOnChange(event) {
    this.setState({query: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    this.apiCall(this.state.query)
    }
  async apiCall() {
    const reqOptions = {
        method: 'GET',
        headers: {
          "x-rapidapi-key": "f0d62b0e00mshe149082a3348d33p1a9cf2jsnffb3733db8b2",
	        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	        "useQueryString": true
        }
    }
    let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/SFO-sky/LAX-sky/2021-03-21/?query=" + this.state.query, reqOptions)
    response = await response.json()
    this.setState({eachPlace: response.Places})
    this.setState({eachCurrency: response.Currencies})
    this.setState({eachDate: response.Dates})
    this.setState({eachQuote: response.Quotes})
    console.log(this.state.eachPlace)
    console.log(this.state.eachCurrency)
    console.log(this.state.eachDate)
    console.log(this.state.eachQuote)
    // console.log(response.Places)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header title="Airport Flight Search"/>
        <div className="search-div">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search For the Cheapest Flights" name="search" onChange={(e)=>this.handleOnChange(e)} value={this.state.query} required/>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          <BrowseDates places={this.state.eachPlace} />
        </div>
        </header>
        <Footer footercontent="Flight Search Application"/>
      </div>
    );
  }  
  }

export default App;
