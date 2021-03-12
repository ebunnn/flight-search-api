import React from 'react';
import './css/BrowseDates.css';

function browseDates(props) {
    return(
        <div>
            <div className="airport-labels">
                {props.places.map(place => {
                    return(
                        <div key={place.PlaceId}>
                            <h5>Airport Name(PlaceName): {place.PlaceName}</h5>
                            <h5>Airport ID (PlaceID): {place.PlaceId}</h5>
                            <h5>Country(CountryName): {place.CountryName}</h5>
                            <h5>Country ID: {place.CountyId}</h5>
                            <h5>Region ID: {place.RegionId}</h5>
                            <h5>City ID(City ID): {place.CityId}</h5>
                        </div>
                    )
                })}
                
            </div>
            
        </div>
    )
}

export default browseDates;