import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import {AnimalProvider} from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { Home } from "./Home"

export const ApplicationViews = () => {
    return (
        <>

            {/* Render the HOME JSX when http://localhost:8088/ */}
                <Route exact path="/">
                    <Home />      
                </Route>

            {/* Render the location list when http://localhost:8088/locations */}
            <LocationProvider>
                <Route  path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            {/* Render the animal list when http://localhost:8088/employee */}
            <EmployeeProvider>
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>

            {/* Render the animal list when http://localhost:8088/animals */}
            <AnimalProvider>
                <Route path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>



        </>
    )
}

// exact is needed on the first route, otherwise it will also match the other routes, 
//and the Home will render for every route