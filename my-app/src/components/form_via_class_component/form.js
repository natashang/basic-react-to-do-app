import React, { Component, Fragment } from 'react'

// Splitted the form and list into individual components
import FormComponent from './components/form/form'
import ListComponent from './components/list/list'

// A class compoment implementation of a form for a To Do Lis

// there can only be one default export per file!
export default class Form extends Component{

    // setState(): updates the component's state object 
    // when the state changes, the component is re-rendered

    // props: properties, passed to component like parameters
    // state: managed within the component, like variables in a function

    // mutable state is kept in the component's state property
    constructor(props) {
        super(props)
        this.state = {
            value:'',
            listOfItems: []
        }
        
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleInputSubmit = this.handleInputSubmit.bind(this)
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
    }

    /*
        Why no "function" keyword?
        - the component Form is class based, so it has METHODS, not FUNCTIONS
        - can also be called this.handleInputChange(input)
        - to define functions in a component, then it should be a functional component
    */

    /*
        - changing an input field creates an event object
        - so we set the state's value from the event's value

        in the lexical scope of this specific instance, as 
        new letters are inputted, change the state's value
        enter 'f' --> state = f
        then 'fs' --> state = fs
        the state changes with each new inputted character
    */

    // changes the input text field from, say, "abac" to ""
    handleInputChange (event) {
        this.setState({value: event.target.value})
    }

    /*
        here, we take the value from the state because inputting is done
        preventDefault(): prevent a browser reload or refresh
        when submitting a form, the browser reloads
    */
    // when the submit button is clicked, invoking this method, append the input to a list and display
    handleInputSubmit (event) {
        this.addToList(this.state.value)
        this.setState({value: ''})
        event.preventDefault()
    }

    // takes the inputted value, adds it to a copy of the list, and updates the list
    addToList(item){
        // get a copy
        const list = [...this.state.listOfItems]
        list.push(item)
        this.setState({ listOfItems: list })
    }

    // deletes a specifieditem from a list
    handleDeleteItem(item){
        //get a copy
        const list = [...this.state.listOfItems]
        const index = list.indexOf(item)

        // goes to index and removes ONE element
        list.splice(index, 1)
        this.setState( { listOfItems: list})
    }

    // destructing the Form class object to call the respective methods
    render() {
        return(
            <Fragment>  
                <FormComponent 
                    value={this.state.value}
                    handleInputChange={this.handleInputChange}
                    handleInputSubmit={this.handleInputSubmit}
                />                 
                <ListComponent
                    listOfItems={this.state.listOfItems}
                    handleDeleteItem={this.handleDeleteItem}
                />                 
            </Fragment>            
       );
    }
}
