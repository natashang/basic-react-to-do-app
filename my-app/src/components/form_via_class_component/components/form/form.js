import React from 'react'
import './form.css'


export default function Form(props) {
    return(
        <form onSubmit={(value) => props.handleInputSubmit(value)} >
            <input value={props.value} type="text" autoFocus onChange={(value) => props.handleInputChange(value)}/>
            <input type="submit" value="Add" id="submitButton"/>            
        </form>
    )    
}

