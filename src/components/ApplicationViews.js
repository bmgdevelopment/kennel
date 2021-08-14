import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { LocationForm } from "./location/LocationForm"
import {AnimalProvider} from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
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
                <Route  exact path="/locations">
                <br/><h2>Current Locations</h2>
                    <LocationList />
                </Route>
            </LocationProvider>

            {/* Render the create location form when http://localhost:8088/locations/create */}
            <LocationProvider>
                <Route  exact path="/locations/create">
                    <LocationForm /> 
                </Route>
            </LocationProvider>

            {/* Render the employee list when http://localhost:8088/employee */}
            <EmployeeProvider>
                <Route exact path="/employees">
                <br/><h2>Current Employees</h2>
                    <EmployeeList />
                </Route>

            {/* Render the add employee form when http://localhost:8088/employees/create */}
                    <LocationProvider>
                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                    </LocationProvider>
            </EmployeeProvider>

            {/* Render the animal list when http://localhost:8088/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                <br/><h2>Current Animals</h2>
                <div className="animalsDiv">
                    <AnimalList />
                </div>
                </Route>
            </AnimalProvider>
            
            {/* Render the add animal form when http://localhost:8088/animals/create */}
            <AnimalProvider>
                <CustomerProvider>
                    <LocationProvider>
                    <Route exact path="/animals/create">
                        <AnimalForm />
                    </Route>
                    </LocationProvider>
                </CustomerProvider>
            </AnimalProvider>
            

            {/* Render the customer list when http://localhost:8088/customers */}
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