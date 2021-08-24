import React, { useState, createContext } from "react" //This code imports the main React library, and two functions that it exports.

export const LocationContext = createContext()

export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8001/locations?_embed=employees&_embed=animals")
        .then(res => res.json())
        .then(setLocations)
    }

    const getLocationById = (locationId) => {
        return fetch(`http://localhost:8001/locations/${locationId}`)
        .then(res => res.json())
    }
 
    const updateLocation = (location) => {
        return fetch(`http://localhost:8001/locations/${location.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
        .then(getLocations)   
    }

    const addLocation = locationObj => {
        return fetch("http://localhost:8001/locations", {
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
            {locations, getLocations, addLocation, getLocationById, updateLocation} //object including info in export
        }>
            {props.children}
        </LocationContext.Provider>
    )
}