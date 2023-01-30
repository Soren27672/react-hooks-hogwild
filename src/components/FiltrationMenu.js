
import React from "react";
import Toggle from "./Toggle";

function FiltrationMenu({ setHogsData, hogsData, constrainHogs }) {

    return (
        <div>
            <Toggle 
            trueText="Clear Sort"
            falseText="Sort by Weight"
            setter={ newValue => {
                setHogsData(data => {
                    return {...data,
                        displayedHogs: constrainHogs({sortByWeight: newValue}),
                        sortByWeight: newValue,
                        sortByName: false}
                })
            }}
            value={ hogsData.sortByWeight }/>
            <Toggle 
            trueText="Clear Sort"
            falseText="Sort by Name"
            setter={ newValue => {
                setHogsData(data => {
                    return {...data,
                        displayedHogs: constrainHogs({sortByName: newValue}),
                        sortByWeight: false,
                        sortByName: newValue}
                })
            }}
            value={ hogsData.sortByName }/>
            <Toggle
            trueText="Show All"
            falseText="Show Greased Only"
            setter={newValue => {
                setHogsData(data => {
                    return {...data,
                        displayedHogs: constrainHogs({greaseFilter: newValue}),
                        greaseFilter: newValue }
                })
            }}
            value={hogsData.greaseFilter} />
        </div>
    )
}

export default FiltrationMenu;