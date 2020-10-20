import React from 'react'
import "../CSS/SearchField.css"
import {BsSearch} from 'react-icons/bs'



const SearchField = ({inputFunction, enterFunction, clickFunction}) => {
return (
		<div style={{display: "inline-flex"}}>
            <input 
                className="search-field" 
                placeholder="City name"
                placeholdertextcolor="#e3071d"
                onKeyDown={enterFunction} 
                onChange={inputFunction} 
            />
            <button className="search-button"  onClick={clickFunction}>
                <BsSearch style={{color: "white"}}/>
            </button>
		</div>
	);
}

export default SearchField


