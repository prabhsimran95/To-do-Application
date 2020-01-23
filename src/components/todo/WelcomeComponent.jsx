import React, {Component} from 'react'
import {BrowserRouter as Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'


class WelcomeComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            welcomeMessage: ''
        }
        this.retreiveWelcomeMessage=this.retreiveWelcomeMessage.bind(this);
        this.handleSuccessfulResponse=this.handleSuccessfulResponse.bind(this);
        this.handleErrorResponse=this.handleErrorResponse.bind(this);

    }
    render(){
        return(
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome, {this.props.match.params.name}. You can watch your todos <Link to="/todos">here</Link>.
                </div>
                <div className="container">
                    click here to get a customized welcome message
                    <button onClick={this.retreiveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }

    retreiveWelcomeMessage(){
        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => this.handleSuccessfulResponse(response))

        HelloWorldService.executeHelloWorldBeanPathVariableService(this.props.match.params.name)
        .then(response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleErrorResponse(error))


    }

    handleSuccessfulResponse(response){
        this.setState({
            welcomeMessage: response.data.message
        })
    }

    handleErrorResponse(error){
        console.log(error.response.data.message)
        this.setState({
            welcomeMessage: error.response.data.message
        })
    }
}

export default WelcomeComponent