import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'

class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state= {
            todos:[],
            message: null 
         
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.refreshTodos= this.refreshTodos.bind(this)
    }
    componentDidMount(){
        this.refreshTodos();
    }

    refreshTodos(){
        let username = AuthenticationService.getLoggedinUser();
        TodoDataService.retrieveAllTodos(username)
        .then(response => {
           this.setState({
                todos: response.data
           })
       }       
        )
    }
    deleteTodoClicked(id){
        let username = AuthenticationService.getLoggedinUser();
        TodoDataService.deleteTodo(username,id)
        .then(
            response => {
                this.setState({
                    message: `Delete of todo ${id} successful`
                })
                this.refreshTodos()
            }
        )
    }
    updateTodoClicked(id){
        console.log('update ' +id)
        this.props.history.push(`/todos/${id}`)
    }
    
    render(){
        return(
        <div >
            <h1>List Todos</h1>
            {this.state.message && <div class ="alert alert-success">{this.state.message}</div>}
            <div className="container">
               
                <table className="table">
                        <thead>
                            <tr>
                                <th>DESCRIPTION</th>
                                <th>IS DONE?</th>
                                <th>TARGET DATE</th>
                                <th>UPDATE</th>
                                <th>DELETE</th>
                            </tr>                        
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-success" onClick= {() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick= {() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                    </tr> 
                                )
                            }
                            
                        </tbody>


                </table>
            </div>
        </div>
        )
    }
}

export default ListTodosComponent





