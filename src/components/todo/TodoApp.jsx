import React, {Component} from 'react'



class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
                My Todo Application
                <LoginComponent />
            </div>
        )
    }
}

class LoginComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            username: 'in28minutes',
            password: ''
        }
    }
    render(){
        return(
            <div>
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
            Password:  <input type="password" name ="password" value={this.state.password} />
            <button>Login</button>
            </div>
            
        )
    }
}




export default TodoApp