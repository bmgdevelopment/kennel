import React from "react"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import "./Kennel.css"

export const Home = () => (
    <>
        <h1 className="h1__title">Nashville Kennels</h1>
        <div className="heading__text">
        <small>Loving care when you're not there.</small>
        <address>
        <div>Visit Us at the Nashville North Location</div>
        <div>500 Puppy Way</div>
        </address>
        </div>
        
        <h2>Animals</h2>
        <article className="animals">
            <AnimalProvider>
                <AnimalList />
            </AnimalProvider>
        </article>
        
        <h2>Employees</h2>
        <article className="employees">
            <EmployeeProvider >
                <EmployeeList />
            </EmployeeProvider >
        </article>
        
        <h2>Locations</h2>
        <article className="locations">
            <LocationProvider>
                <LocationList />
            </LocationProvider >
        </article>
        
        <h2>Customers</h2>
        <article className="customers">
            <CustomerProvider>
                <CustomerList />
            </CustomerProvider>
            
        </article>
    </>
)