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
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false

        }
    //    this.handleUsernameChange=this.handleUsernameChange.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.loginAction=this.loginAction.bind(this);
    }
    // This is the general way of handling any event but this will not be sufficient when we have a 
    // number of other events. we cannot write as many handler events as we want.
    
    // handleUsernameChange(event){
    //     console.log(event.target.value);
    //     this.setState({
    //         username: event.target.value
    //     })
    // }

    // this is the general way of
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginAction(){
        if(this.state.username==="prabh" && this.state.password==="abcd"){
            console.log("login successfull")
            this.setState({
                hasLoginFailed: false,
                showSuccessMessage: true
            })
        }
        else{
            console.log("Login failed")
            this.setState({
                    hasLoginFailed: true,
                    showSuccessMessage: false
            })
        }
    }
    render(){
        return(
            <div>
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password:  <input type="password" name ="password" value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.loginAction}>Login</button>
            <ShowInvalidMessages hasLoginFailed={this.state.hasLoginFailed} />
            <ShowWelcomeMessage  showSuccessMessage={this.state.showSuccessMessage} />
            </div>
            
        )
    }

   
}
//  to print the invalid messages in the div content we will make a new component
//  and pass them as props


function ShowInvalidMessages(props){
    if(props.hasLoginFailed){
        return <div>Invalid Credentials</div>
    }
    return null
}

function ShowWelcomeMessage(props){
    if(props.showSuccessMessage){
        return <div>Welcome!!</div>
    }
    return null
}



export default TodoApp