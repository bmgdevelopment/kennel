import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { useParams } from "react-router-dom"
import "./Animal.css"

export const AnimalDetail = () => {
    const { animals } = useContext(AnimalContext)
    const [ animal, setAnimal ] = useState({ location: {}, customer: {} })

    /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
    const { animalId } = useParams();


    useEffect(() => {
        //need getAnimals() in order to capture animals info
        const thisAnimal = animals.find(a => a.id === parseInt(animalId)) || { location: {}, customer: {} }
        setAnimal(thisAnimal)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animalId])

    return (
    <section className="animalSection sortedSection">
        <h3 className="animal__name">{ animal.name }</h3>
        <div className="animal__breed">{ animal.breed }</div>
        <div className="animal__location">Location: { animal.location.name }</div>
        <div className="animal__owner">Customer: { animal.customer.name }</div>
    </section>
    )
}
