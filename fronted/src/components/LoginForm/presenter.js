import React from "react";
import Proptypes from "prop-types";
import FacebookLogin from 'react-facebook-login';
import formStyles from "shared/formStyles.module.scss";

const LoginForm = (props, context) => (
    <div className={formStyles.formComponent}>        
        <form className={formStyles.form} onSubmit={props.handleSubmit}>
        <input 
            type="text" 
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
        <input type="submit" value={context.t("Log in")} className={formStyles.button} />
        </form>
        <span className={formStyles.divider}>{context.t("or")}</span>
        <FacebookLogin
            appId="1158742204280157"
            autoLoad={false}
            fields="name,email,picture"            
            callback={props.handleFacebookLogin}
            cssClass={formStyles.facebookLink}
            icon="fa-facebook-official"
            textButton={context.t("Log in with Facebook")}
        />        
        <span className={formStyles.forgotLink}>{context.t("Forgot password?")}</span>
    </div>
);

LoginForm.propTypes = {
    handleInputChange: Proptypes.func.isRequired,
    usernameValue: Proptypes.string.isRequired,
    passwordValue: Proptypes.string.isRequired,
    handleSubmit: Proptypes.func.isRequired,
    handleFacebookLogin: Proptypes.func.isRequired
};

LoginForm.contextTypes = {
    t: Proptypes.func.isRequired
};

export default LoginForm;