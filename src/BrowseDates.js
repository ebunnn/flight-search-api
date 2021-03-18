import React from 'react';
import './css/BrowseDates.css';



function browseDates(props) {   
    const data = []
    for (let i = 0; i < props.quotes.length; i++){
        data.push(Number(props.quotes[i]["MinPrice"]))    
    }
    const minNum = Math.min(...data);
    function minNumFunc(quoteParam) {
        if (quoteParam === minNum) {
            return (
                    <td style={{color: "red"}}>{quoteParam}</td>
            )
        } else {
            return (
                <td>{quoteParam}</td>
            )
        }       
    }  
    console.log(minNum)
    return(
        <div>
            <table className="airport-table">
                <thead>
                    <tr>
                        <th>Airport Name</th>
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
                                            <th>Price</th>                 
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
                                                        {console.log(minNumFunc(quote.MinPrice))}
                                                         </tr>                                                                                  
                                                        )
                                                })}
                                        
                                    </tbody>
                                </table>
            </div>
        )
}

export default browseDates;