import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./Customer.css"


export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext) //the function using the CustomerContext deconstructs the arguments content/context

      //useEffect hook - reach out to the world for something; listens for custom events
    useEffect(() => {
        console.log("CustomerList: useEffect - getCustomers")
        getCustomers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className="customers">
        {
            customers.map(customer => {
                return (
                    <div className="customer" id={`customer--${customer.id}`} key={customer.id}>
                        <div className="customer__name">
                            Name: { customer.name }
                        </div>
                        <div className="customer__animal">
                            Animal: { customer.animal.name }
                        </div>
                        <div className="customer__animalBreed">
                        Breed: { customer.animal.breed }
                        </div>
                    </div>
                )
            })
        }
        </section>
    )
}