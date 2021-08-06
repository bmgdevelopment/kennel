import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"


export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext) //the function using the EmployeeContext deconstructs the arguments content/context

    //useEffect hook - reach out to the world for something; listens for custom events
    useEffect(() => {
        console.log("AnimalList: useEffect - getEmployees")
        getEmployees()
    }, [])

    return (
        <section className="employees">
        {
            employees.map(employee => {
                return (
                    <div className="employee" id={`employee--${employee.id}`}>
                        <div className="employee__name">
                            Name: { employee.name }
                        </div>
                        <div className="employee__location">
                            Location: {employee.location.name }
                        </div>
                    </div>
                )
            })
        }
        </section>
    )
}