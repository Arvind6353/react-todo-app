import React, { Component } from 'react';
import './App.css';

import {Grid,Row,Col,ListGroup,ListGroupItem} from 'react-bootstrap';


import Todo from './ToDo';

class ToDoList extends Component {

	constructor(props){

		super(props);

		this.state={
			
		};

		this.update=this.update.bind(this);
		this.remove=this.remove.bind(this);

	}

	componentWillMount(){

		console.log(this.props.todos.length)
		/*this.setState({
			toDoList:this.props.todos
		});
*/

	}

	update(indx){

	this.props.update(indx);

	}
	remove(indx){


			this.props.remove(indx);
	}

  render() {
    return (
        <div>

            <Grid fluid>
              <Row>
	              <Col xs={1} md={1}/>
	              <Col xs={10} md={10}>
	                   
	                  <ListGroup>
	                   
	                   	{this.props.todos.map((todo,i)=>
	                   	
	                   		<ListGroupItem key={todo.id}><Todo key={todo.id} todo={todo}  update={this.update} remove={this.remove}></Todo></ListGroupItem>

	                   	)}

	                  </ListGroup>

	              </Col>    
               </Row>
             </Grid>    
        </div>
    );
  }
}

export default ToDoList;
