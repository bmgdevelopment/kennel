/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { useHistory } from "react-router-dom"
import "./Location.css"


export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext) //the function using the LocationContext deconstructs the arguments content/context
    const history = useHistory()

    useEffect(() => {
        console.log("LocationList: useEffect - getLocations")
        getLocations()
    }, [])

    return (
        <>
         <div className="wrapperDiv">
        <div className="locationBtnDiv">
            <button onClick={
                () => history.push("/locations/create")
            }>
                Add Location
            </button>
        </div>

        <div className="locationsDiv">
        {
            locations.map(location => {
                return (
                    <div className="location" id={`location--${location.id}`} key={location.id}>
                        <div className="location__name">
                            Name: { location.name }
                        </div>
                        <div className="location__address">
                            Location: {location.address }
                        </div>
                    </div>
                )
            })
        }
        </div>
        </div>
    </>
    )
}