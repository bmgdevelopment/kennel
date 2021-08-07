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


    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=customer&_expand=location")
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

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <AnimalContext.Provider value={
            {animals, getAnimals, addAnimal} //object including info in export {animals:animals,  getAnimals: getAnimals function, addAnimal: addAnimal function} 
    }> 
            {props.children}
        </AnimalContext.Provider>
    )
}
