import React from "react"

function RenderedAccount(props) {
    return (
        <div className="liveAccounts">
            <input 
                type="radio" 
                name="editedAccount" 
                value="Edit"
                onChange={() => props.handleChange(props.item.id)}></input>
            <p>{props.item.name}{props.item.balance}</p>
            <input
                type="submit" 
                value="Kill" 
                onChange={() => props.handleChange(props.item.id)}></input>
        </div>
    )
}

export default RenderedAccount