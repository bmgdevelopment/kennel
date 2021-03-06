import React, { useState, createContext } from "react" //This code imports the main React library, and two functions that it exports.

export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8001/employees?_expand=location")
        .then(res => res.json())
        .then(setEmployees)
    }

    const getEmployeeById = (employeeId) => {
        return fetch(`http://localhost:8001/employees/${employeeId}`)
        .then(res => res.json())
    }

    const addEmployee = employeeObj => {
        return fetch("http://localhost:8001/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getEmployees)
    }

    const updateEmployee = (employeeObj) => {
        return fetch(`http://localhost:8001/employees/${employeeObj.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getEmployees)
    }
    
    return (
        <EmployeeContext.Provider value = {
            {employees, getEmployees, addEmployee, getEmployeeById, updateEmployee} //object including info in export
        }>
            {props.children}
        </EmployeeContext.Provider>
    )
}