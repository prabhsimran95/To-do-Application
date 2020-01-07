import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'


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

    // this is the general way of handling any change event at all
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value // can not understand event.target.name
        })
    }

    loginAction(){
        if(this.state.username==="prabh" && this.state.password==="abcd"){
            AuthenticationService.registerSuccesfulLogin(this.state.username,this.state.password);
         this.props.history.push(`/welcome/${this.state.username}`)
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
                <h1>Login</h1>
                <div className="container">
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password:  <input type="password" name ="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginAction}>Login</button>
                    <ShowInvalidMessages hasLoginFailed={this.state.hasLoginFailed} />
                    <ShowWelcomeMessage  showSuccessMessage={this.state.showSuccessMessage} />
                </div>     
            </div>
            
        )
    }

   
}

function ShowInvalidMessages(props){
    if(props.hasLoginFailed){
        return <div className="alert alert-warning">Invalid Credentials</div>
    }
    return null
}

function ShowWelcomeMessage(props){
    if(props.showSuccessMessage){
        return <div>Welcome!!</div>
    }
    return null
}

export default LoginComponent