import React, { useState, createContext } from "react" //This code imports the main React library, and two functions that it exports.

// The context is imported and used by individual components that 
// need data.
// A context stores a certain kind of data to be used in your application. 
// Therefore, when you create a data provider component in React, you need 
// to create a context.
export const AnimalContext = createContext()

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([]) // We will useState to hold and set the array of animals.
    // let foundAnimalObj = {}; // 🤓 Don't need bc it's redundant 

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=customer&_expand=location&_sort=locationId")
        .then(res => res.json())
        .then(setAnimals) // similar action to .then((res) => setAnimals(res))
    }

    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(getAnimals) // similar action to .then((res) => getAnimals(res))
    }

    const releaseAnimal = animalId => {
        return fetch(`http://localhost:8088/animals/${animalId}`, {
            method: "DELETE"
        })
            .then(getAnimals)
    }
// 🤓 NEEDED TO HAVE GETANIMALBYID FUNCTION TO EXPOSE TO PROVIDER; SEE PROVIDER BELOW
    const getAnimalById = (animalId) => {
        return fetch(`http://localhost:8088/animals/${animalId}`)
        .then(res => res.json())
        // .then({ foundAnimalObj }) // don't need bc it's redundant
    }
    
    const updateAnimal = animal => {
        return fetch(`http://localhost:8088/animals/${animal.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(animal)
        })
          .then(getAnimals)
      }      

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <AnimalContext.Provider value={
            {animals, getAnimals, addAnimal, releaseAnimal, updateAnimal, getAnimalById} //object including info in export {animals:animals,  getAnimals: getAnimals function, addAnimal: addAnimal function} ETC... 
    }> 
            {props.children}
        </AnimalContext.Provider>
    )
}
