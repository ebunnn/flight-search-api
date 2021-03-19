import React from 'react';
import './css/BrowseDates.css';



function browseDates(props) {   
    const data = []
    for (let i = 0; i < props.quotes.length; i++){ // for loop to add all the prices of the flights into an empty array
        data.push(Number(props.quotes[i]["MinPrice"]))    
    }
    const minNum = Math.min(...data); // grabbing the cheapest price from the array of prices
    function minNumFunc(quoteParam) { // turns the cheapest price into a red color. I call this function in line 80 and add "quote.MinPrice" as the parameter. "quote.MinPrice" gives each price in a quote 
        if (quoteParam === minNum) {
            return (
                    <td style={{color: "red"}}>{quoteParam}</td>
            )
        } else {                      // if it's not the cheapest price, just return the price in the regular color
            return (
                <td>{quoteParam}</td>
            )
        }       
    }  
    return(
        <div>
            <table className="airport-table">
                <thead>
                    <tr>
                        <th>Airport Names</th>
                        <th>Code</th> 
                        <th>Country</th>
                        <th>City</th>
                        <th>City ID</th>
                    </tr>
                </thead>
                <tbody>
                    {props.places.map(place => {
                            return(        
                                <tr key={place.PlaceId}> 
                                    <td>{place.Name}</td>
                                    <td>{place.SkyscannerCode}-sky</td>
                                    <td>{place.CountryName}</td>
                                    <td>{place.CityName}</td>
                                    <td>{place.CityId}</td> 
                                </tr>   
                            )
                        })}
                </tbody>
            </table>
                                <table className="airport-table2">
                                    <thead>
                                        <tr>
                                            <th>Available Airlines</th>        
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {props.carriers.map(carrier => {
                                            return(
                                                <tr key={carrier.CarrierId}>
                                                     <td>{carrier.Name}</td>
                                                </tr>                                   
                                            )
                                            })}
                                    </tbody>
                                </table>                      

                                <table className="airport-table3">
                                    <thead>
                                        <tr>
                                            <th>Prices</th>                 
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {props.quotes.map(quote => {
                                                    return(
                                                        <tr key={quote.QuoteId}>
                                                            <td>{props.currencies.map(currency => {
                                                            return(  
                                                                <td>{currency.Symbol}</td>                                                                                 
                                                                )
                                                        })}{minNumFunc(quote.MinPrice)}</td>    
                                                         </tr>                                                                                  
                                                        )
                                                })}
                                        
                                    </tbody>
                                </table>
            </div>
        )
}

export default browseDates;