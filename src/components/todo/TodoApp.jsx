import React, {Component} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import HeadComponent from './HeadComponent.jsx'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent'
import ListTodosComponent from './ListTodosComponent'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import WelcomeComponent from './WelcomeComponent'
import TodoComponent from './TodoComponent'

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
                <Router>
                    <>
                    <HeadComponent/>
                        <Switch> 
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            {/*the below route(/todos/:id) has higher priority than (todos) 
                            which is why we have to write it above todos route otherwise 
                            todos route was getting executed everytime  */}
                            <AuthenticatedRoute path="/todos/:id" component={TodoComponent} />
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
                            <Route path="/logout" component={LogoutComponent} />                            
                            <Route component={ErrorComponent}></Route>
                        </Switch> 
                       <FooterComponent/>                  
                    </>
                </Router>
            </div>
        )
    }
}

function ErrorComponent(){
    return <div>An error occured and I dont know what to do</div>
}

export default TodoApp