import React from 'react';
import styles from './Login.module.css'
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormComponents/FormComponents';
import { required } from './../common/FormComponents/validators';
import { connect } from 'react-redux';
import { loginTC } from '../../Redux/auth-Reducer';
import { Redirect } from 'react-router-dom';

const Login = (props) => {

    const onSubmit = (formdata) => {
        props.loginTC(formdata.email, formdata.password, formdata.rememberMe=false )
    }
    if(props.isLogged)  return <Redirect to={'/profile'}/>
    return (
        
        <div>
            <div> Login  </div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isLogged: state.authData.isLogged
})

export default connect (mapStateToProps, {loginTC}) (Login);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='email' component={Input} type='text' placeholder='Login' validate={[required]}/>
            </div>
            <div>
            <Field name='password' component={Input} type='text' placeholder='Password' validate={[required]} type='password'/>
            </div>
            <div>
            <Field name='rememberMe' component={Input} type='checkbox' /> Remember Me
            </div>
            <div className={styles.errorBox}>
            {props.error}
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
