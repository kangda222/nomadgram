import React from "react";
import Proptypes from "prop-types";
import FacebookLogin from 'react-facebook-login';
import formStyles from "shared/formStyles.module.scss";

const SignupForm = (props, context) => (
    <div className={formStyles.formComponent}>
        <h3 className={formStyles.signupHeader}>
        {context.t("Sign up to see photos and videos from your friends.")}
        </h3>        
        <FacebookLogin
            appId="1158742204280157"
            autoLoad={false}
            fields="name,email,picture"            
            callback={props.handleFacebookLogin}
            cssClass={formStyles.button}
            icon="fa-facebook-official"
            textButton={context.t("Log in with Facebook")}
        />           
        <span className={formStyles.divider}>{context.t("or")}</span>
        <form className={formStyles.form} onSubmit={props.handleSubmit}>
        <input 
            type="email" 
            placeholder={context.t("Email")} 
            className={formStyles.textInput}
            onChange={props.handleInputChange}
            name="email"
            value={props.emailValue}
        />
        <input 
            type="text" 
            placeholder={context.t("Full Name")} 
            className={formStyles.textInput}
            onChange={props.handleInputChange}
            name="fullname"
            value={props.fullnameValue}
        />
        <input
            type="username"
            placeholder={context.t("Username")}
            className={formStyles.textInput}
            onChange={props.handleInputChange}
            name="username"
            value={props.usernameValue}
        />
        <input
            type="password"
            placeholder={context.t("Password")}
            className={formStyles.textInput}
            onChange={props.handleInputChange}
            name="password"
            value={props.passwordValue}
        />
        <input type="submit" value={context.t("Sign up")} className={formStyles.button} />
        </form>
        <p className={formStyles.terms}>
        {context.t("By signing up, you agree to our ")}<span>{context.t("Terms & Privacy Policy")}</span>.
        </p>
    </div>
);

SignupForm.proptypes = {
    handleInputChange: Proptypes.func.isRequired,
    emailValue: Proptypes.string.isRequired,
    fullnameValue: Proptypes.string.isRequired,
    usernameValue: Proptypes.string.isRequired,
    passwordValue: Proptypes.string.isRequired,
    handleSubmit: Proptypes.func.isRequired,
    handleFacebookLogin: Proptypes.func.isRequired
};

SignupForm.contextTypes = {
    t: Proptypes.func.isRequired
};

export default SignupForm;