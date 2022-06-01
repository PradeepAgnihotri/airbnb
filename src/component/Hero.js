import React from "react"
import FP from "../front--pic.png"

export default function Hero () {
    return(
        <section className="hero">
            <img src={FP} alt = " " className="frontPic" />
            <h1 className="heading">Online Experiences</h1>
            <p className="para">Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.</p>
        </section>

    )
}