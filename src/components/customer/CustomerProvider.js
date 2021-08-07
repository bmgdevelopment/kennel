import React, { useState, createContext } from "react" //This code imports the main React library, and two functions that it exports.

export const CustomerContext = createContext()
// a Context is a singleton which reference one set of data object
//  Providers are like bridges or connectors that provide information for the context

export const CustomerProvider = (props) => {
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers?_expand=animal,location")
        .then(res => res.json())
        .then(setCustomers)
    }

    const addCustomer = customerObj => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerObj)
        })
        .then(getCustomers)
    }

    return (
        <CustomerContext.Provider value = {
            {customers, getCustomers, addCustomer} //object including info in export
        }>
            {props.children}
        </CustomerContext.Provider>
    )
}