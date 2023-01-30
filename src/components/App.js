import React, {useState} from "react";
import Nav from "./Nav";
import FiltrationMenu from "./FiltrationMenu";
import DisplayArea from "./DisplayArea";
import PopUp from "./PopUp";

import hogs from "../porkers_data";

function App() {
	const [hogsData, setHogsData] = useState({
		displayedHogs: [...hogs],
		sortByName: false,
		sortByWeight: false,
		greaseFilter: false
	});
	const [popUpData, setPopUpData] = useState({
		specialty: null,
		weight: null,
		greased: null,
		"highest medal achieved": null,
		visible: false
	});

	function constrainHogs({ greaseFilter = hogsData.greaseFilter, sortByName = hogsData.sortByName, sortByWeight = hogsData.sortByWeight }) {
		console.log(greaseFilter, sortByName, sortByWeight)
		let newHogs = [...hogs];
		if (greaseFilter) newHogs = newHogs.filter(hog => hog.greased);
		if (sortByName) newHogs.sort((a,b) => {
			if (a.name > b.name) return 1;
			if (b.name > a.name) return -1;
			return 0; 
		});
		if (sortByWeight) newHogs.sort((a,b) => a.weight - b.weight);
		console.log(newHogs);
		
		return newHogs;
	}

	return (
		<div className="App">
			<Nav />
			<FiltrationMenu
			setHogsData={setHogsData}
			hogsData={hogsData}
			constrainHogs={constrainHogs}/>
			<DisplayArea
			hogs={hogsData.displayedHogs}
			setPopUpData={setPopUpData}/>
			{popUpData.visible ?
			<PopUp popUpData={popUpData} 
			setPopUpData={setPopUpData}/> :
			null
			}
		</div>
	);
}

export default App;

/*


App
> Filtration Menu
  > Hog cell
> Display Area
> Facts Popup

Okie saweetie :)
Next up is for you to create the filter/sort
menus, control them and use them to update
the hogsData object

then >
Create a hog tile

then >
give the hog tile an onClick event that uses
the setPopUpData function to send a popup

then > 
Create the popup

then >
create an onBlur event for the popup that
sets the popUp's visible property to false


*/