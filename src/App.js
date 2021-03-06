import React, {Component} from 'react'; 
import './App.css';
import Header from './Header';
import Footer from './Footer';
import BrowseDates from './BrowseDates';

class App extends Component {
  constructor() {
    super()
    this.state = {
      eachPlace: [], //empty arrays to put the information from api
      query: "",
      currency: "USD",
      destination: "LAX-sky",
      location: "SFO-sky",       // filled in parameters that can be changed on the app
      outboundDate: "2021-03-21",
      inboundDate: "2021-04",
      eachCarrier: [],
      eachDate: [],
      eachQuote: [],
      eachCurrency: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.apiCall = this.apiCall.bind(this)
    this.handleCurrency = this.handleCurrency.bind(this) 
  }
  handleOnChange(event) {
    this.setState({query: event.target.value}) // Setting the state for each parameters so it can change everytime the user changes it
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
  handleInboundDate(event) {
    this.setState({inboundDate: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    this.apiCall(this.state.query) // handling the submit button by letting the api call function accept the query
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
    let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/"  // concatenation of parameters
     + this.state.currency + "/en-US/" 
     + this.state.location + "/" 
     + this.state.destination + "/"
     + this.state.outboundDate + "/" 
     + this.state.inboundDate
     + "/?query=" + this.state.query, reqOptions)
    response = await response.json()
    this.setState({eachPlace: response.Places}) // setting these states to place the json data into arrays 
    this.setState({eachCurrency: response.Currencies})
    this.setState({eachCarrier: response.Carriers})
    this.setState({eachDate: response.Dates})
    this.setState({eachQuote: response.Quotes}) 
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header title="Airport Flight Search"/>
        <h4 style={{color: "red"}}> We Have Put Some Sample Inputs but You Can Change Them. Please Fill Out These Inputs Before Submitting <br/> * (Red Price = Cheapest)</h4>
        <div className="search-params">
            <form className="currency-search" onSubmit={this.handleSubmit}>
            <label>Currency (ex: USD)  </label>
              <input type="text" name="currency" onChange={(e)=>this.handleCurrency(e)} value={this.state.currency} required/>
            </form>
            <form className="currency-search" onSubmit={this.handleSubmit}>
            <label>Destination (ex: LAX-sky)  </label>
              <input type="text" name="destination" onChange={(e)=>this.handleDestination(e)} value={this.state.destination} required/>
            </form>
            <form className="currency-search" onSubmit={this.handleSubmit}>
            <label> Current Location (ex: SFO-sky)  </label>
              <input type="text" name="location" onChange={(e)=>this.handleLocation(e)} value={this.state.location} required/>
            </form>
            <form className="currency-search" onSubmit={this.handleSubmit}>
            <label>Outbound Date (ex: 2021-03-21)  </label>
              <input type="text" name="outbound-date" onChange={(e)=>this.handleOutboundDate(e)} value={this.state.outboundDate} required/>
            </form>
            <form className="currency-search" onSubmit={this.handleSubmit}>
            <label>Inbound Date (ex: 2021-04)  </label>
              <input type="text" name="inbound-date" onChange={(e)=>this.handleInboundDate(e)} value={this.state.inboundDate} required/>
            </form>
        </div>
 
        <div className="search-div" onSubmit={this.handleSubmit}>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search any State" name="search" onChange={(e)=>this.handleOnChange(e)} value={this.state.query} required/>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          <BrowseDates places={this.state.eachPlace} quotes={this.state.eachQuote} carriers={this.state.eachCarrier} currencies={this.state.eachCurrency}  />
        </div>
        </header>
        <Footer footercontent="Flight Search Application"/>
      </div>
    );
     
  }
  }

export default App;
