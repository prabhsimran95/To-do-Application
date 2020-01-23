import React, {Component} from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'



class TodoComponent extends Component{

    constructor(props){
        super(props)
        this.state= {
            id: this.props.match.params.id,
            description : '',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit= this.onSubmit.bind(this)
        this.validate= this.validate.bind(this)
    }
    validate(values){
        let errors= {}
        if(!values.description){
            errors.description =  'Enter a description'
        }else if(values.description.length<5){
            errors.description = 'Enter atleast 5 characters in Description'
        }
        if(!moment(values.targetDate).isValid()){
            errors.targetDate =  'Enter a valid date'
        }
        return errors
    }
    onSubmit(values){
        console.log(values)
    }

    componentDidMount(){
        let username = AuthenticationService.getLoggedinUser();
        TodoDataService.retrieveTodo(username, this.state.id)
        .then(todo =>
            this.setState({
                description : todo.data.description,
                targetDate : moment(todo.data.targetDate).format('YYYY-MM-DD')
            }) )
    }

    render(){
        let {description,targetDate} = this.state // we can initalize a variable with the values from an object in this way.
        // it creates a less verbose code
        // other way would be to do let description = this.state.description
        var divstyle = {
            
        }

        return(
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                        initialValues = {{targetDate,description}}
                        onSubmit = {this.onSubmit}
                        validateOnChange={false} // these two statements are used to print error messages only on
                        validateOnBlur={false}   // the click of the button.
                        validate= {this.validate}
                        enableReinitialize = {true} 
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                                    <fieldset className ="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name ="description" />
                                    </fieldset>
                                    <fieldset className ="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name ="targetDate" />
                                    </fieldset>
                                    <button type="submit" className="btn btn-success">Save</button>

                                </Form>
                                
                            )
                        }
                    </Formik>
                </div>                
            </div>
            
        )
    }

}
export default TodoComponent