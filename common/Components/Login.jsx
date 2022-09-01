import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "./FormControls";
import {requiredField} from "../../utils/validation/validator";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import c from "./FormControls.module.css"

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.login, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (<>
            <h1>
                LOGIN
            </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={"login"} component={Input}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={Input} type={"password"}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            {props.error && <div className={c.formError}>
                {props.error}
            </div>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {loginThunkCreator})(Login);