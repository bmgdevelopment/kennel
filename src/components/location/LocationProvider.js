import React, { useState, createContext } from "react" //This code imports the main React library, and two functions that it exports.

export const LocationContext = createContext()

export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
        .then(res => res.json())
        .then(setLocations)
    }

    const addLocation = locationObj => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationObj)
        })
        .then(getLocations)
    }

    return (
        <LocationContext.Provider value = {
            {locations, getLocations, addLocation} //object including info in export
        }>
            {props.children}
        </LocationContext.Provider>
    )
}