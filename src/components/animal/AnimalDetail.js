import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { useParams, useHistory  } from "react-router-dom"
import "./Animal.css"

export const AnimalDetail = (props) => {
    const { animals, releaseAnimal } = useContext(AnimalContext)
    const [ animal, setAnimal ] = useState({ location: {}, customer: {} })
    const history = useHistory()

    /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
    const { animalId } = useParams();


    useEffect(() => {
        //need getAnimals() in order to capture animals info
        if (props.animal) {
            setAnimal(props.animal)
        } else {
            const thisAnimal = animals.find(a => a.id === parseInt(animalId)) || { location: {}, customer: {} }
            setAnimal(thisAnimal)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animalId])

    const handleRelease = () => {
        releaseAnimal(animal.id)
          .then(() => {
            history.push("/animals")
          })
      }

    return (
    <>
        <section className="animalSection">
            <h3 className="animal__name">{ animal.name }</h3>
            <div className="animal__breed">{ animal.breed }</div>
            <div className="animal__location">Location: { animal.location.name }</div>
            <div className="animal__owner">Customer: { animal.customer.name }</div><br/>
        <button onClick={() => {
            history.push(`/animals/edit/${animal.id}`)
        }}>Edit</button>
        <button onClick={handleRelease}>Release Animal</button>
        </section>
    </>
    )
}
