import React, { Component } from 'react';
import './App.css';
import AddToDo from './AddToDo';
import NavBarComp from './NavBar';
import ToDoList from './ToDoList';
import FilterToDo from './FilterToDo';

class App extends Component {

  constructor(props){

    super(props);


    this.state={

                todoList : [

                            /*  {id:0, text:"One", completed:false},
                              {id:1, text:"Two", completed:true},
                              {id:2, text:"Three", completed:false}
*/
                           ],
                filteredList:[]


    }


    this.add=this.add.bind(this);
    this.update=this.update.bind(this);
    this.remove=this.remove.bind(this);
    this.filter=this.filter.bind(this);

  }

  getNextId(){

    this.id=this.id || 0;
    return this.id++;
  }

  add(text){

    var todos=this.state.todoList;
    todos.push(
                {
                  id:this.getNextId(),
                  text:text,
                  completed:false
                }
              )
    console.log(todos);
    this.setState({todoList:todos})
    this.setState({filteredList:todos})

  }

  update(indx){
   
    var todos=this.state.todoList.map((todo,i)=>{

        if(todo.id===indx) {
          todo.completed=!todo.completed
        }

        return todo;
    })

  this.setState({todoList:todos})
  this.setState({filteredList:todos})

  }

  remove(indx){

    
    var todos=this.state.todoList.filter((todo)=>{
         return todo.id!==indx;
    })

    console.log(todos);
    this.setState({todoList:todos})
    this.setState({filteredList:todos})

  }

  filter(param){

      var todos=[];
      if(param === 'All'){ 

          this.setState({filteredList:this.state.todoList})

        }

      if(param==='Pending'){


         todos=this.state.todoList.filter((todo)=>{

            return todo.completed!==true

        })

        this.setState({filteredList:todos});


      }  


      if(param==='Completed'){


         todos=this.state.todoList.filter((todo)=>{

            return todo.completed===true

        })

        this.setState({filteredList:todos});


      }  




  }


  render() {
    
    return (


      <div className="App">
      
        <NavBarComp/>

        <AddToDo add={this.add}></AddToDo>

        <ToDoList todos={this.state.filteredList}  remove={this.remove} update={this.update}> </ToDoList>

        <FilterToDo filter={this.filter}></FilterToDo>

      </div>
    );
  }



}

export default App;
