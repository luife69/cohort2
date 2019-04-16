import React from "react"


function Icon(props){ 
		console.log("test from icon", props);



    	return (
    		<div>
    		<img 
    			src={props.item.linkAddress} 
	    		className="App-icon" 
	    		alt="descripcion del icono"
    		/>
    		</div>
    	)
}


export default Icon