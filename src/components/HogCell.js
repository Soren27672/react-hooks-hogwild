
import React from "react";

function HogCell({ name, specialty, greased, weight, image, medal, setPopUpData}) {

    return (
        <div
        className="ui eight wide column pigTile"
        onClick={() => {
            console.log("before error??")
            setPopUpData({
            specialty: specialty,
            weight: weight,
            greased: greased,
            "highest medal achieved": medal,
            visible: true
        })}}>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
        </div>
    )
}

export default HogCell;