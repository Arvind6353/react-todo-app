import React, { Component } from 'react';
import './App.css';

import {Button} from 'react-bootstrap';
	

class ToDo extends Component {

	constructor(props){

		super(props);


		this.btnStyle={

			textAlign:'right',
			float:'right'
		}

		this.textStyle={

			fontWeight:'bolder',
			fontSize:'18px'

		}

		this.textStyleCompleted={
			fontSize:'18px',
			backgroundColor:'lightgreen'

		}
	}



  render() {
    return (
        <div>
        {this.props.todo.completed? this.renderCompleted():this.renderNotCompleted()}
          
            <Button bsStyle="danger" bsSize="xsmall" style={this.btnStyle} onClick={()=>this.props.remove(this.props.todo.id)}> X </Button>
        </div>
    );
  }


	renderCompleted(){

		return (
			<span>
				<del><span style={this.textStyleCompleted} onClick={()=>this.props.update(this.props.todo.id)}> {this.props.todo.text}</span></del>
			</span>

			)
	}



	renderNotCompleted(){

		return (
			<span>
				<span style={this.textStyle} onClick={()=>this.props.update(this.props.todo.id)}> {this.props.todo.text}</span>
			</span>

			)
	}
}

export default ToDo;
