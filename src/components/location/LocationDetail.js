import React, {useContext, useEffect, useState} from "react"
import { LocationContext } from "../location/LocationProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Location.css"

export const LocationDetail = () => {
const { locations } = useContext(LocationContext)
const [ location, setLocation ] = useState({employees: [], animals: [] })   // needed to have empty arrays initialized for later use
const history = useHistory()

const { locationId } = useParams();

useEffect(() => {
    // getLocations()
    const thisLocation = locations.find(location => location.id === parseInt(locationId)) || { employees: [], animals: [] }
    setLocation(thisLocation)
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [locationId])

return (
    <section className="locationSection sortedSection">
        <h3  className="location__name">{ location.name }</h3>
        <div className="location__address">{ location.address }</div>
            <div className="location__employees">
                <h4>Employees</h4>
                {location.employees.length > 0 ? location.employees.map(employee => <p>{employee.name}</p> ) : <p> No employees at this location </p>   }
            </div>
            <div className="location__animals">
                <h4>Animals</h4>
                {location.animals.length > 0 ? location.animals.map(animal => <p>{animal.name}</p> ) : <p> No animals at this location </p>   }
            </div>
        <button onClick={() => {
            history.push(`/locations/edit/${location.id}`)
        }}>Edit</button>
    </section>
)}

// 🤓 TERNARY IF/ELSE SYNTAX
// location.employees.length > 0 ? location.employees.map(employee => <p>{employee.name}</p> ) : <p> No employees at this location </p>   

// 🤓 LONGER CONDITIONAL STATEMENTS USING SHORT CIRCUITING 
// { location.employees.length > 0 && location.employees.map(employee => (
//     <p>{employee.name}</p>   
// )) }
// { location.employees.length === 0 && <p>No employees at this location</p> }
// {location.employees.length > 0 ? location.employees.map(employee => <p>{employee.name}</p> ) : <p> No employees at this location </p>   }
                