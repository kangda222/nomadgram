import React from "react";
import Ionicon from "react-ionicons";
import Proptypes from "prop-types";
import styles from "./styles.module.scss";

export const LoginForm = (props, context) => (
    <div className={styles.formComponent}>        
        <form className={styles.form}>
        <input type="text" placeholder={context.t("Username")} className={styles.textInput} />
        <input
            type="password"
            placeholder={context.t("Password")}
            className={styles.textInput}
        />
        <input type="submit" value={context.t("Log in")} className={styles.button} />
        </form>
        <span className={styles.divider}>{context.t("or")}</span>
        <span className={styles.facebookLink}>
        <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" /> {context.t("Log in with Facebook")}
        </span>
        <span className={styles.forgotLink}>{context.t("Forgot password?")}</span>
    </div>
);

LoginForm.contextTypes = {
    t: Proptypes.func.isRequired
};

export const SignupForm = (props, context) => (
    <div className={styles.formComponent}>
        <h3 className={styles.signupHeader}>
        Sign up to see photos and videos from your friends.
        </h3>
        <button className={styles.button}>
        <Ionicon icon="logo-facebook" fontSize="20px" color="white" /> Log in with
        Facebook
        </button>
        <span className={styles.divider}>or</span>
        <form className={styles.form}>
        <input type="email" placeholder={context.t("Email")} className={styles.textInput} />
        <input type="text" placeholder={context.t("Full Name")} className={styles.textInput} />
        <input
            type="username"
            placeholder={context.t("Username")}
            className={styles.textInput}
        />
        <input
            type="password"
            placeholder={context.t("Password")}
            className={styles.textInput}
        />
        <input type="submit" value={context.t("Sign up")} className={styles.button} />
        </form>
        <p className={styles.terms}>
        By signing up, you agree to our <span>Terms & Privacy Policy</span>.
        </p>
    </div>
);

SignupForm.contextTypes = {
    t: Proptypes.func.isRequired
};