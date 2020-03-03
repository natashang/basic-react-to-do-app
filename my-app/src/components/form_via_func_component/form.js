import React, { useState, Fragment } from 'react'
import { Button } from 'react-bootstrap'
import './form.css'

// A functional compoment implementation of a form for a To Do List


/*
    Why no default keyword?
        - const, like let, is a lexical declaration used to define an identifier in your block
        - default expects a hoistable, class, or assignment declaration
        - therefore, it is a syntax error!
*/

// ES5 implementation: export default function Form () { ... }
export const Form = () => {

    // useState() hook
    let [value, setValue] = useState('')
    let [listOfItems, setList] = useState([])


    /* ES5 implementation
        function handleInputChange (event) {
            setValue( event.target.value )
        }
    */

    // changes the input text field from, say, "abac" to ""
    const handleInputChange = event => setValue( event.target.value)

    /*
        here, we take the value from the state because inputting is done
        preventDefault(): prevent a browser reload or refresh
        when submitting a form, the browser reloads
    */
    // when the submit button is clicked, invoking this method, append the input to a list and display
    const handleInputSubmit = event => {
        addToList(value)
        setValue('')
        event.preventDefault()
    }

    // takes the inputted value, adds it to a copy of the list, and updates the list
    const addToList = item =>{
        // get a copy
        const list = listOfItems
        list.push(item)
        setList(list)
    }

    // deletes a specifieditem from a list
    const handleDeleteItem = item =>{
        
        //get a copy
        const list = [...listOfItems]
        const index = list.indexOf(item)
        
        // goes to index and removes ONE element
        list.splice(index, 1)
        setList(list)
    }

    return(
        <Fragment>  
            <form onSubmit={handleInputSubmit}>
                <input type="text" value={value} autoFocus onChange={handleInputChange}/>
                <input type="submit" value="Add" id="submitButton"/>            
            </form>
            
            <ul>
                { listOfItems.map( item => {
                    return(
                        <div>
                            <li key={item}>{item} 
                                <Button
                                    variant="outline-primary" 
                                    onClick={() => handleDeleteItem(item)}
                                >
                                X
                                </Button>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </Fragment>            
       );
}
export default Form;