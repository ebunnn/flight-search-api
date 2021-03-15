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
      currency: "USD",
      destination: "LAX-sky",
      location: "SFO-sky",
      outboundDate: "2021-03-21",
      eachCurrency: [],
      eachDate: [],
      eachQuote: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.apiCall = this.apiCall.bind(this)
    this.handleCurrency = this.handleCurrency.bind(this) 
  }
  handleOnChange(event) {
    this.setState({query: event.target.value})
  }
  handleCurrency(event) {
    this.setState({currency: event.target.value})
  }
  handleDestination(event) {
    this.setState({destination: event.target.value})
  }
  handleLocation(event) {
    this.setState({location: event.target.value})
  }
  handleOutboundDate(event) {
    this.setState({outboundDate: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    this.apiCall(this.state.query)
    }
  async apiCall() {
    const reqOptions = {
        method: 'GET',
        headers: {
          "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
	        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	        "useQueryString": true
        }
    }
    let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/" + this.state.currency + "/" + "en-US/" + this.state.location + "/" + this.state.destination + "/" + this.state.outboundDate + "/?query=" + this.state.query, reqOptions)
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
        <form className="currency-search" onSubmit={this.handleSubmit}>
          <label>Currency (ex. USD or GBD):  </label>
            <input type="text" name="currency" onChange={(e)=>this.handleCurrency(e)} value={this.state.currency} required/>
          </form>
          <form className="currency-search" onSubmit={this.handleSubmit}>
          <label>Destination (ex. LAX-sky):  </label>
            <input type="text" name="destination" onChange={(e)=>this.handleDestination(e)} value={this.state.destination} required/>
          </form>
          <form className="currency-search" onSubmit={this.handleSubmit}>
          <label> Current Location (ex. SFO-sky):  </label>
            <input type="text" name="destination" onChange={(e)=>this.handleLocation(e)} value={this.state.location} required/>
          </form>
          <form className="currency-search" onSubmit={this.handleSubmit}>
          <label>Outbound Date (ex. 2021-03-21):  </label>
            <input type="text" name="destination" onChange={(e)=>this.handleOutboundDate(e)} value={this.state.outboundDate} required/>
          </form>
        <div className="search-div" onSubmit={this.handleSubmit}>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search For the Cheapest Flights" name="search" onChange={(e)=>this.handleOnChange(e)} value={this.state.query} required/>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          <BrowseDates places={this.state.eachPlace} />
        </div>
        </header>
        {/* <Footer footercontent="Flight Search Application"/> */}
      </div>
    );
  }  
  }

export default App;
