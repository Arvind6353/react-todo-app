import React, { Component } from 'react';

import './App.css';

import {Grid,Row,Col,Button,FormGroup,InputGroup,FormControl} from 'react-bootstrap';

class AddToDo extends Component {

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
                  <FormGroup>
                      <InputGroup>
                        <FormControl type="text" placeholder="ToDo Item"   inputRef={(ref) => {this.toDoText = ref}}/>
                            <InputGroup.Button>
                              <Button bsStyle="warning" onClick={this.add}>Add</Button>
                             </InputGroup.Button> 
                        
                      </InputGroup>
                  </FormGroup>
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

export default AddToDo;
