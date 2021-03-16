import React from 'react';
import './css/BrowseDates.css';



function browseDates(props) {
    // const priceFix = carrier.CarrierId === quote.OutboundLeg.CarrierIds ? 
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
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {props.carriers.map(carrier => {
                                            return(
                                                <tr key={carrier.CarrierId}>
                                                     <td>{carrier.Name}</td>
                                                {props.quotes.map(quote => {
                                                    return(  
                                                        <td>{props.currencies.map(currency => {
                                                            return(  
                                                                <td>{currency.Symbol}</td>
                                                                                                                                                        
                                                                )
                                                        })}{quote.MinPrice}</td> // not sure why the prices are showing as two prices per airline. should be one price per airline :/
                                                                                                                                                
                                                        )
                                                })}
                                                 </tr>
                                                                        
                                                                )
                                            })}
                                    </tbody>
                                </table>
            </div>
        )
}

export default browseDates;