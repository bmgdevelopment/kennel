import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./Customer.css"


export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        console.log("AnimalList: useEffect - getCustomers")
        getCustomers()
    }, [])

    return (
        <section className="customers">
        {
            customers.map(customer => {
                return (
                    <div className="customer" id={`customer--${customer.id}`}>
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