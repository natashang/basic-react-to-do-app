import React from 'react';
import {Table} from 'react-bootstrap'

import FormViaClass from '../form_via_class_component/form'
import FormViaFunc from '../form_via_func_component/form'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my Basic To Do app!</h1>
        <p>
          Below are two implementations of a Form, one via a class component and
          and the other via a functional component. Both achieve the same goal,
          but with different executions.
        </p>
        <p>Instructions:</p>
        <ol>
          <li>Enter items in input box and click "Add" to add them to the list</li>
          <li>Click the "X" button to delete them; the list will update automatically</li>
        </ol>

        <Table striped bordered  variant="dark">
          <thead>
            <tr>
              <th>Class component with subcomponents</th>
              <th>Functional component, no subcomponents</th> 
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><FormViaClass/></td>
              <td><FormViaFunc/></td>
            </tr>
          </tbody>
        </Table>
      </header>
    </div>
  );
}

export default App;
