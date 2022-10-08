import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "./FormControls";
import {requiredField} from "../../utils/validation/validator";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import c from "./FormControls.module.css"

const Login = ({isAuth, loginThunkCreator, captcha}) => {
    console.log("Login", captcha);
    const onSubmit = (formData) => {
        loginThunkCreator(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (<>
            <h1>
                LOGIN
            </h1>
            <LoginReduxForm onSubmit={onSubmit} captcha={captcha}/>
        </>
    );
};

const LoginForm = ({handleSubmit, error, captcha}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"login"}
                       name={"login"} component={Input}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={"password"}
                       name={"password"} component={Input}
                       type={"password"}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field type={"checkbox"}
                       name={"rememberMe"}
                       component={"input"}/> remember me
            </div>
            {error && <div className={c.formError}>
                {error}
            </div>}
            {captcha && <img src={captcha} alt={'anti bot symbols'}/>}
            {captcha && <div><Field placeholder={'symbols from image'}
                                    name={'captcha'}
                                    component={'input'}
                                    validate={[requiredField]}
            /></div>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captchaUrl
})
export default connect(mapStateToProps, {loginThunkCreator})(Login);