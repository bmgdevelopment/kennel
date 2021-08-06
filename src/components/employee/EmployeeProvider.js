import React, { useState, createContext } from "react" //This code imports the main React library, and two functions that it exports.

export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=location")
        .then(res => res.json())
        .then(setEmployees)
    }

    const addEmployee = employeeObj => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getEmployees)
    }

    return (
        <EmployeeContext.Provider value = {
            {employees, getEmployees, addEmployee} //object including info in export
        }>
            {props.children}
        </EmployeeContext.Provider>
    )
}