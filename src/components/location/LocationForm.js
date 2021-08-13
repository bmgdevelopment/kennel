import React, { useContext, useState} from "react"
import { LocationContext } from "../location/LocationProvider"
import { useHistory } from "react-router-dom"
import "./Location.css"

export const LocationForm = () => {
    const { addLocation } = useContext(LocationContext)
    
    const [location, setLocation] = useState({
        name: "",
        address: ""
    })
    
    const history = useHistory()

    // useEffect(() => {}, []) // 🤓 is this needed?

    const handleControlledInputChange = (e) => {
        const newLocation = { ...location }
        newLocation[e.target.id] = e.target.value
        setLocation(newLocation)
    }

    const handleClickSaveLocation = (e) => {
        e.preventDefault()

        if (location.name.length && location.address.length) {
            const newLocation = {
                name: location.name,
                address: location.address
            }
            addLocation(newLocation)
            .then(() => history.push('/locations'))
        } else {
            window.alert("Please enter a location name & location address")
        }
    }

    return (
        <form className="locationForm">
        <div className="h2_form_div">
            <h2 className="locationForm__title">Create New Location</h2>
        </div>

        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Location name: </label>
                <input type="text" id="name" required autoFocus className="form-control" placeholder="Location Name" value={location.name} onChange={handleControlledInputChange} />
            </div>
        </fieldset>

        <fieldset>
        <div className="form-group">
                <label htmlFor="name">Location address: </label>
                <input type="text" id="address" required autoFocus className="form-control" placeholder="Location Address" value={location.address} onChange={handleControlledInputChange} />
            </div>
        </fieldset>

        <button className="btn btn-primary" onClick={handleClickSaveLocation}>
            Save Location
        </button>
    </form>
    )
} //end of LocationForm