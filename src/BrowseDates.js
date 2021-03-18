import React from 'react';
import './css/BrowseDates.css';



function browseDates(props) {
   
    const data = []
    for (let i = 0; i < props.quotes.length; i++){
        data.push(Number(props.quotes[i]["MinPrice"]))
       
        
    }
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

    const minNum = Math.min(...data);
    console.log(Math.min(...data));
    

    return(
        <div>
            <table className="airport-labels">
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
                                <table className="airport-labels2">
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
                                                {/* {props.quotes.map(quote => {
                                                    return(  
                                                        <td>{props.currencies.map(currency => {
                                                            return(  
                                                                <td>{currency.Symbol}</td>                                                                                 
                                                                )
                                                        })}{quote.MinPrice}</td> // not sure why the prices are showing as two prices per airline. should be one price per airline :/
                                                                                                                                                
                                                        )
                                                })}
                                                <td>{cheapestPrice}</td> */}
                                                 </tr>
                                                                        
                                                                )
                                            })}
                                    </tbody>
                                </table>

                                

                                <table className="airport-labels3">
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
                                                        
                                                        

                                                         </tr>
                                                         // not sure why the prices are showing as two prices per airline. should be one price per airline :/
                                                                                                                                                
                                                        )
                                                })}
                                        
                                    </tbody>
                                </table>
            </div>
        )
}

export default browseDates;