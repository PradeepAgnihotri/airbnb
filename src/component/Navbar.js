import React from "react"
import airbnb from "../airbnb-1.png"

export default function Navbar() {

    return(
        <nav>
            <img src={airbnb} className="nav--logo"/>
        </nav>
    )
}