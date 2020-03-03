import React from 'react'
import {Button} from 'react-bootstrap'


export default function ListItem(props) {
    return(
        <ul>
                    { props.listOfItems.map( item => {
                        return(
                            <div>
                                <li key={item}>{item} 
                                    <Button
                                        variant="outline-primary" 
                                        onClick={(item) => props.handleDeleteItem(item)}
                                    >
                                        X
                                    </Button>
                                </li>
                            </div>
                        )
                    })}
                </ul>
    )
}
//export default ListItem;