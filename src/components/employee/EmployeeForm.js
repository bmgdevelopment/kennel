import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Employee.css"

/*
STEPS TO EDIT FORM
1: CREATE GETEMPLOYEEBYID COMPONENT IN EMPLOYEEPROVIDER.JS AND EXPOSE COMPONENT TO EMPLOYEECONTEXT.PROVIDER
2: CREATE UPDATEEMPLOYEE COMPONENT IN EMPLOYEEPROVIDER.JS AND EXPOSE COMPONENT TO EMPLOYEECONTEXT.PROVIDER
3: IMPORT GETEMPLOYEEBYID IN USECONTEXT(EMPLOYEECONTEXT)
4: CREATE BUTTONS TO EDIT CURRENT EMPLOYEE WHILE VIEWING ONE EMPLOYEE IN EMPLOYEEDETAIL.JS
5: MAKE SURE TO LINK PROPER INFO TO INVOKED ADD OR EDIT COMPONENTS
6: MAKE SURE TO HAVE USESTATE HOLD THE API INFO
*/

export const EmployeeForm = () => {
const { locations, getLocations } = useContext(LocationContext)
const { addEmployee, getEmployeeById, updateEmployee } = useContext(EmployeeContext)


const [employee, setEmployee] = useState({
    name: "",
    locationId: 0
})

const history = useHistory()
const [isLoading, setIsLoading] = useState(true)

const {employeeId} = useParams()


const handleControlledInputChange = (e) => {
    const newEmployee = { ...employee }
    newEmployee[e.target.id] = e.target.value
    setEmployee(newEmployee)
}

const handleClickSaveEmployee = (e) => {

    const locationId = parseInt(employee.locationId)

    if (locationId === 0 || employee.name === "") {
       window.alert("Please enter an employee name and select an employee location")
    } else {
        setIsLoading(true)
        if (employeeId) {
            updateEmployee({
                id: employee.id,
                name: employee.name,
                locationId: locationId
            })
            .then(() => history.push(`/employees/detail/${employee.id}`))
        } else {
            addEmployee({
                name: employee.name,
                locationId: locationId
            })
            .then(() => history.push("/employees"))
        }
    }
}

    useEffect(() => {
        getLocations().then(() => {
            if (employeeId) {
                getEmployeeById(employeeId)
                .then(employee => {
                    setEmployee(employee)
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }        
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

        <button className="btn btn-primary" 
        disabled={isLoading}
        onClick={e => {
            e.preventDefault()
            handleClickSaveEmployee()
            }}>
            {employeeId ? <> Save Employee </> : <> Add Employee </> }
        </button>
    </form>
)
} //end of EmployeeForm