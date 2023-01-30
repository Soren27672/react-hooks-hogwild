
import React, {useState} from "react";
import HogCell from "./HogCell";

function DisplayArea({ hogs, setPopUpData }) {

    return (
        <div className="ui grid container">
            {hogs.map(hog => {
                return (
                    <HogCell
                    name={hog.name}
                    specialty={hog.specialty}
                    greased={hog.greased}
                    weight={hog.weight}
                    image={hog.image}
                    medal={hog["highest medal achieved"]}
                    setPopUpData={setPopUpData} 
                    
                    key={hog.name}/>
                )
            })}
        </div>
    )
}

export default DisplayArea;