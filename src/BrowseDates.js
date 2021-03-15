import React from 'react';
import './css/BrowseDates.css';

function browseDates(props) {
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
                                    {/* <h5>Country ID: {place.CountyId}</h5>
                                    <h5>Region ID: {place.RegionId}</h5> */}    
                                </tr>   
                           )
                        })}
                </tbody>
            </table>
                {/* <table className="airport-labels">
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
                                        <div key={place.PlaceId}>
                                            <tr> 
                                                <td>(PlaceName): {place.Name}</td>
                                                <td>(SkyscannerCode): {place.SkyscannerCode}-sky</td>
                                                <td>(CountryName): {place.CountryName}</td>
                                                <td>(City Name): {place.CityName}</td>
                                                <td>(City ID): {place.CityId}</td> 
                                                <h5>Country ID: {place.CountyId}</h5>
                                                <h5>Region ID: {place.RegionId}</h5> 
                                            </tr>           
                                        </div>
                                    )
                                })}
                            </tbody>
                    </table> */}
            </div>
        )
}

export default browseDates;