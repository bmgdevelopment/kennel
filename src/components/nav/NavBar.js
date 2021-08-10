import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <div className="navBarDiv">
            <ul className="navbar">
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/" style={{textDecoration:"none"}} >NSS Kennels</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/locations" style={{textDecoration:"none"}} >Locations</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/animals" style={{textDecoration:"none"}} >Animals</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/customers" style={{textDecoration:"none"}} >Customers</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/employees" style={{textDecoration:"none"}} >Employees</Link>
                </li>
            </ul>
        </div>
    )
}
