import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "./FormControls";
import {requiredField} from "../../utils/validation/validator";

const Login = (props) => {
    const onSubmit = (formData)=>{
        console.log(formData)
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
                <Field placeholder={"password"} name={"password"} component={Input}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: "login"})(LoginForm)




export default Login;