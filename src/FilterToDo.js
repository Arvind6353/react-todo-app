import React, { Component } from 'react';
import './App.css';

import {Grid,Row,Col,Button} from 'react-bootstrap';

class FilterToDo extends Component {

  constructor(props){

    super(props);

    this.add=this.add.bind(this);

  }

  render() {
    return (
        <div>
            <Grid fluid>
              <Row>
              <Col xs={1} md={1}/>
              <Col xs={10} md={10}>
                  
              	 <Col xs={4} md={4}>
				    <Button bsStyle="primary" onClick={()=>this.props.filter('All')}> &nbsp;&nbsp; All  &nbsp;&nbsp;</Button>
				  </Col>  
				  <Col xs={4} md={4}>
				    <Button bsStyle="danger" onClick={()=>this.props.filter('Pending')}> Pending</Button>
				   </Col>
				   <Col xs={4} md={4}> 
				    <Button bsStyle="success" onClick={()=>this.props.filter('Completed')}> Completed</Button>
				   </Col> 
				 

              </Col>    
                </Row>
              </Grid>    

        </div>


    );
  }

  add(){

    var text=this.toDoText.value;
    this.props.add(text);
    this.toDoText.value="";

  }


}

export default FilterToDo;
