import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { useHistory, Link } from 'react-router-dom'
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext) //the function using the AnimalContext deconstructs the arguments content/context
  
  
  // useHistory() is a hook function provided by react-router-dom. It 
  // allows you to immediately use a push() method which you can use to change 
  // the URL. Be sure to import it at the top of the document.
  
  
  //useEffect hook - reach out to the world for something; listens for custom events
  useEffect(() => { 
    console.log("AnimalList: useEffect - getAnimals")
    getAnimals()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) //The dependency array. Logic within functions only occur when a function is invoked. Within a React component, useEffect is a function. After the return, useEffect is automatically invoked and since the dependency array is empty, it only runs the first time the component renders.
  const history = useHistory()

  return (
    <>
      <div className="buttonDiv">
      <button onClick={() => history.push("/animals/create")}>
          Make Reservation
      </button>
      </div>

      <div className="animalsDiv">
                {
                    animals.map(animal => {
                      return ( 
                      <>
                      <div className="link_p_div">
                      <Link to={`/animals/detail/${animal.id}`} key={animal.id}>
                          { animal.name }
                      </Link> 
                      <p>{animal.breed}</p>
                      </div>
                      </>
                        )}
                    )
                }
      </div>
    </>
)
}


/*
 <>
      <div className="buttonDiv">
      <button onClick={
        () => history.push("/animals/create")
      }>
            Add Animal
      </button>
      </div>
      <div className="animalsDiv">
      {
        animals.map(animal => {
          return (
            <div className="animal" id={`animal--${animal.id}`} key={animal.id} >
              <div className="animal__name">
                Name: { animal.name }
              </div>
              <div className="animal__breed">
                Breed: { animal.breed }
              </div>
            </div>
          )
        })
      }
      </div>
    </>
*/

/*
return (
    <section className="animals">
      {
        animals.map(animal => {
          return (
            <div className="animal" id={`animal--${animal.id}`} key={animal.id}>
              <div className="animal__name">
                Name: { animal.name }
              </div>
              <div className="animal__breed">
                Breed: { animal.breed }
              </div>
            </div>
          )
        })
      }
    </section>
  )
*/ 