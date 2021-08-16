/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { LocationContext } from "./LocationProvider"
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
                   <>
                     <div className="link_p_div">
                      <Link to={`/locations/detail/${location.id}`} key={location.id}>
                          { location.name }
                      </Link> 
                      <p>{location.address}</p>
                      <p>{location.employees.length} employees</p>
                      <p>{location.animals.length} animals</p>
                      </div>
                   </>
                )
            })
        }
        </div>
        </div>
    </>
    )
}

/*
{
employees.map(employee => {
    if (employee.locationId === location.id) {
        locEmployees.push(employee)
    }
    return (
      <p>{locEmployees.length} employees</p>
    )
})
}
{
animals.map(animal => {
    if (animal.locationId === location.id) {
        locAnimals.push(animal)
    }
    return (
      <p>{locAnimals.length} animals</p>
    )
})
}


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
*/