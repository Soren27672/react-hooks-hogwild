
import React from "react";

function PopUp({ popUpData, setPopUpData }) {
    const { specialty, weight, greased} = popUpData;

    return (
        <div className="popUp"
        onClick={() => {setPopUpData(data => {
            return {...data, visible: false}
        })}}>
            <ul>
                <li>{`Specialty: ${specialty}`}</li>
                <li>{`Weight: ${weight}`}</li>
                <li>{`Highest Medal Achieved: ${popUpData["highest medal achieved"]}`}</li>
                <li>{greased ? "Greased" : "Not Greased"}</li>
            </ul>
        </div>
    )
}

export default PopUp;