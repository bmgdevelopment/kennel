import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import {AnimalProvider} from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { Home } from "./Home"

export const ApplicationViews = () => {
    return (
        <>

            {/* Render the Home module when http://localhost:8088/ */}
                <Route exact path="/">
                    <Home />      
                </Route>

            {/* Render the location list when http://localhost:8088/locations */}
            <LocationProvider>
                <Route  path="/locations">
                <br/><h2>Current Locations</h2>
                    <LocationList />
                </Route>
            </LocationProvider>

            {/* Render the animal list when http://localhost:8088/employee */}
            <EmployeeProvider>
                <Route path="/employees">
                <br/><h2>Current Employees</h2>
                    <EmployeeList />
                </Route>
            </EmployeeProvider>

            {/* Render the animal list when http://localhost:8088/animals */}
            <AnimalProvider>
                <Route path="/animals">
                <br/><h2>Current Animals</h2>
                    <AnimalList />
                </Route>
            </AnimalProvider>

            {/* Render the animal list when http://localhost:8088/animals */}
            <CustomerProvider>
                <Route path="/customers">
                <br/><h2>Current Customers</h2>
                    <CustomerList />
                </Route>
            </CustomerProvider>
        </>
    )
}

// exact is needed on the first route, otherwise it will also match the other routes, 
//and the Home will render for every route