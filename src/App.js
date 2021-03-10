import React, {Component} from 'react'; 
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Places from './Places';

class App extends Component {
  constructor() {
    super()
    this.state = {
      eachPlace: [],
      query: ""
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
    let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=" + this.state.query, reqOptions)
    response = await response.json()
    this.setState({eachPlace: response.Places})
    console.log(this.state.eachPlace)
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
          {/* <h1 style={{color: "black"}}>{this.state.query}</h1> */}
        </div>
        <div>
          <Places places={this.state.eachPlace}/>
        </div>
        </header>
        <Footer footercontent="Thank You for Using My Flight Search Application"/>
      </div>
    );
  }  
  }

export default App;
