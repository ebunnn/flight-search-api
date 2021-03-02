import React, {Component} from 'react'; 
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      eachPlace: [],
      error: null,
      searchWords: null,
      submit: ""
    }
    this.apiCall = this.apiCall.bind(this)
  }

  apiCall() {
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "f0d62b0e00mshe149082a3348d33p1a9cf2jsnffb3733db8b2",
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="search-div">
          <form>
            <input type="text" placeholder="Search For the Cheapest Flights" name="search"/>
            <button type="submit">Submit</button>
          </form>
        </div>
        </header>
      </div>
    );
  }  
  }

export default App;
