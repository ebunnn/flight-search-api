import React, {Component} from 'react'; 
import './App.css';
import Header from './Header';
import Footer from './Footer.js';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header title="Airport Flight Search"/>
        <div className="search-div">
          <form>
            <input type="text" placeholder="Search For the Cheapest Flights" name="search"/>
            <button type="submit">Submit</button>
          </form>
        </div>
        </header>
        <Footer footercontent="Thank You for Using My Flight Search Application"/>
      </div>
    );
  }  
  }

export default App;
