import React from 'react';
import styles from './Login.module.css'
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';

const Login = (props) => {
    const onSubmit = (formdata) => {
        console.log(formdata)
    }
    return (
        <div>
            <div> Login  </div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='login' component='input' type='text' placeholder='Login'/>
            </div>
            <div>
            <Field name='password' component='input' type='text' placeholder='Password'/>
            </div>
            <div>
            <Field name='rememberMe' component='input' type='checkbox' /> <span>Remember Me</span>
            </div>
            <div>
             <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'loginForm'
  })(LoginForm)
