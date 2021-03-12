console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showGreen") {
		filterLegos("Green")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})



//used to filter lego by name
const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}


const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	})

}

//communicate witht the dom
const materialElement = document.querySelector("#materialOption")
//event listener
materialElement.addEventListener("change", (event) => {
	//if statement, targets the ID with in the drop down of the HTML
	if (event.target.id === "materialOption") {
		//if this id is targeted, then target the same value under the json array
		const materialValue = (event.target.value);
		//this uses the function we made below to select the specific "material" property with in the array.
		filterLegosMaterial(materialValue)

		// console.log("we made it")
	// } else if (event.target.id === "showAll") {
	// 	makeLegoList(useLegos())
	}
})

// used to filter the lego materials
const filterLegosMaterial = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.Material.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}




//seach bar
const searchElement = document.querySelector(".searchLego")
//event listener
searchElement.addEventListener("keyup", (event) => {
	//if statement, targets the ID with in the drop down of the HTML
	if (event.keyCode === 13) {
		//if this id is targeted, then target the same value under the json array
		const searchValue = (searchElement.value);
		//this uses the function we made below to select the specific "material" property with in the array.
		filterLegosSearch(searchValue)
		
	// } else if (event.target.id === "showAll") {
	// 	makeLegoList(useLegos())
	}
})


const filterLegosSearch = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoId === (whatFilter)) {
			return singleLego;
		}
	})
	
	makeLegoList(filterArray)

}










startEIA();