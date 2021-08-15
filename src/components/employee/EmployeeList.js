/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { useHistory, Link } from "react-router-dom"
import "./Employee.css"


export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext) //the function using the EmployeeContext deconstructs the arguments content/context

    const history = useHistory()

    //useEffect hook - reach out to the world for something; listens for custom events
    useEffect(() => {
        console.log("EmployeeList: useEffect - getEmployees")
        getEmployees()
    }, [])

    return (
        <>
        <div className="wrapperDiv">

            <div className="employeeBtnDiv">
                <button onClick={
                () => history.push("/employees/create")
                }>
                    Add Employee
                </button>
            </div>

            <div className="employeesDiv">
                <section className="employees">
                {
                    employees.map(employee => {
                        return (
                           <div className="link_p_div">
                               <Link to={`/employees/detail/${employee.id}`} key={employee.id}>
                                   { employee.name }
                               </Link>
                               <div>
                               Location: {employee.location.name }
                               </div>
                           </div>
                        )
                    })
                }
                </section>
            </div>

        </div>
        </>
    )
}

/*
return (
        <>
        <div className="wrapperDiv">

            <div className="employeeBtnDiv">
                <button onClick={
                () => history.push("/employees/create")
                }>
                    Add Employee
                </button>
            </div>

            <div className="employeesDiv">
                <section className="employees">
                {
                    employees.map(employee => {
                        return (
                            <div className="employee" id={`employee--${employee.id}`} key={employee.id}>
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
            </div>

        </div>
        </>
    )
*/