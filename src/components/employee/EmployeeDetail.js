import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Employee.css"

export const EmployeeDetail = () => {
    const { employees } = useContext(EmployeeContext)
    const [ employee, setEmployee ] = useState( { location: {} })
    const history = useHistory()

    /*
        Given the example URL above, this will store the value
        of 5 in the employeeId variable
    */
    const { employeeId } = useParams();

    useEffect(() => {
        //need getemployees() in order to capture employees info
        const thisEmployee = employees.find(employee => employee.id === parseInt(employeeId)) || { location: {} }
        setEmployee(thisEmployee)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [employeeId])

    return ( 
    <section className="employeeSection sortedSection">
        <h3 className="employee__name">{ employee.name }</h3>
        <div className="employee__location">Location: { employee.location.name }</div><br/>
    <button onClick={() => {
        history.push(`/employees/edit/${employee.id}`)
    }}>Edit</button>
    </section>
    ) 
}
