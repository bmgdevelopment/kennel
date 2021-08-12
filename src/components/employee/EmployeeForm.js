import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { useHistory } from "react-router-dom"
import "./Employee.css"

export const EmployeeForm = () => {
const { locations, getLocations } = useContext(LocationContext)
const { addEmployee } = useContext(EmployeeContext)


const [employee, setEmployee] = useState({
    name: "",
    locationId: 0
})

const history = useHistory()

useEffect(() => {
    getLocations()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

const handleControlledInputChange = (e) => {
    const newEmployee = { ...employee }
    newEmployee[e.target.id] = e.target.value
    setEmployee(newEmployee)
}

const handleClickSaveEmployee = (e) => {
    e.preventDefault()

    const locationId = parseInt(employee.locationId)

    if (locationId > 0 && employee.name.length > 0 ) {
        const newEmployee = {
            name: employee.name,
            locationId: locationId
        }
        addEmployee(newEmployee)
        .then(() => history.push("/employees"))
    } else {
        window.alert("Please enter an employee name and select an employee location")
    }
}

return (
    <form className="employeeForm">
        <div className="h2_form_div">
            <h2 className="employeeForm__title">Create New Employee</h2>
        </div>

        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Employee name: </label>
                <input type="text" id="name" required autoFocus className="form-control" placeholder="First and Last Name" value={employee.name} onChange={handleControlledInputChange} />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="location">Assign to location: </label>
                <select name="locationId" id="locationId" className="form-control" value={employee.locationId} onChange={handleControlledInputChange}>
                    <option value="0">Select a location</option>
                    {locations.map(location => (
                        <option key={location.id} value={location.id}>
                            {location.name}
                        </option>
                    ))}
                </select>
            </div>
        </fieldset>

        <button className="btn btn-primary" onClick={handleClickSaveEmployee}>
            Save Employee
        </button>
    </form>
)
} //end of EmployeeForm