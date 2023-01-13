import React, { useState } from 'react'
import Main from './MainPage';
import Error404 from './Error404Page';

export default function RouterByZuriefais(pathname: string) {
    const [locationName, setCurrentLocationName] = useState('');
    const [locations] = useState(new Map([
        ["/", <Main />]
    ]));

    function setDefaultLocation() {
        let loc = locations.get(pathname)
        if(loc == null) {
            loc = <Error404 />
        }
        return loc
    }

    const [currentLocation, setCurrentLocation] = useState(setDefaultLocation);
    
    console.log(pathname)

    return(
        <>
            {currentLocation}
        </>
    )
}