import React from "react"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalSearch } from "./animal/AnimalSearch"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import "./Kennel.css"

export const Home = () => (
    <>
        <div className="div-1 box">
            <h1 className="h1__title">Nashville Kennels 🐾</h1>
            <div className="heading__text">
                <p className="slogan">Loving care when you're not there.</p>
                <address>
                    <div>Visit Us at the Nashville North Location</div>
                    <div>500 Puppy Way</div>
                </address>
            </div>
        </div>

        <div className="div-2 box">
            <h2 className="h2-home">Animals</h2>
            <article className="animals">
                <CustomerProvider>
                    <LocationProvider>
                        <AnimalProvider>
                            <AnimalSearch />
                            <AnimalList />
                        </AnimalProvider>
                    </LocationProvider>
                </CustomerProvider>
            </article>
        </div>

        <div className="div-3 box">
            <h2 className="h2-home">Employees </h2>
            <article className="employees">
                <EmployeeProvider >
                    <EmployeeList />
                </EmployeeProvider >
            </article>
        </div>

        <div className="div-4 box">
            <h2 className="h2-home">Locations</h2>
            <article className="locations">
                <LocationProvider>
                    <LocationList />
                </LocationProvider >
            </article>
        </div>

        <div className="div-5 box">
            <h2 className="h2-home">Customers</h2>
            <article className="customers">
                <CustomerProvider>
                    <CustomerList />
                </CustomerProvider>
            </article>
        </div>
    </>
)