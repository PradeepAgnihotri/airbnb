import React from "react"

// import Star from "./Images/star.png"
// const Star = React.lazy(()=> import(`../Images${props.item.coverImg}`))


export default function Card (props) {
    // const Image = React.lazy(()=> import(`../Images${props.item.coverImg}`))
    // console.log(Image)
    // console.log(Star)
    return(
        <div className="card">
            
            {/* {openShots===0 <div className="card--badge">SOLD OUT</div>} */}
            <img src={process.env.PUBLIC_URL+`/Images/${props.item.coverImg}`} alt=" " className="card--image"/>
            <div className="card--stats">
            
                <img src={process.env.PUBLIC_URL+"/Images/star.png"} alt=" " className="card--star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray"> ({props.item.stats.reviewCount}) </span>
                <span className="gray">*{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><strong>From ${props.item.price}</strong> / person</p>

        </div>
    )
}