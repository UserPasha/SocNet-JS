import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "./FormControls";
import {requiredField} from "../../utils/validation/validator";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import c from "./FormControls.module.css"

const Login = ({isAuth, loginThunkCreator}) => {
    const onSubmit = (formData) => {
        loginThunkCreator(formData.login, formData.password, formData.rememberMe)
    }
    if (isAuth) {
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

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
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
            {error && <div className={c.formError}>
                {error}
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