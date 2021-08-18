import React, { useContext, useEffect, useState} from "react"
import { LocationContext } from "../location/LocationProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Location.css"

export const LocationForm = () => {
    const { addLocation, getLocationById, updateLocation  } = useContext(LocationContext)
    
    const [location, setLocation] = useState({
        name: "",
        address: ""
    })
    
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(true)
    const {locationId} = useParams()

    const handleControlledInputChange = (e) => {
        const newLocation = { ...location }
        newLocation[e.target.id] = e.target.value
        setLocation(newLocation) 
    }

    const handleClickSaveLocation = (e) => {
        // e.preventDefault()

        if (location.name.length === 0 || location.address.length === 0) {
            window.alert("Please enter a location name & location address")
        } else {
            setIsLoading(true)
            if (location.id) {
                updateLocation({
                    id: location.id,
                    name: location.name,
                    address: location.address
                })
                .then(() => history.push(`/locations/detail/${location.id}`))
            } else {
                addLocation({
                    name: location.name,
                    address: location.address
                })
                .then(() => history.push("/locations"))
            }
        }
    }

    useEffect(() => {
        // const locationId = parseInt(location.id)

        if (locationId) {
            getLocationById(locationId)
            .then(location => {
                setLocation(location)
                setIsLoading(false)
            }) 
        } else {
            setIsLoading(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                <label htmlFor="address">Location address: </label>
                <input type="text" id="address" required className="form-control" placeholder="Location Address" value={location.address} onChange={handleControlledInputChange} />
            </div>
        </fieldset>

        <button className="btn btn-primary" 
        disabled={isLoading}
        onClick={e => {
            e.preventDefault()
            handleClickSaveLocation()
        }}>
            {locationId ? <> Save Location </> : <> Add Location </> }
        </button>
    </form>
    )
} //end of LocationForm