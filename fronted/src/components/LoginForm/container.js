import React, {Component} from "react";
import LoginForm from "./presenter";
import PropTypes from "prop-types";

class Container extends Component{
    state = {
        username:"",
        password:""
    };
    static propTypes = {
        facebookLogin: PropTypes.func.isRequired,
        usernameLogin: PropTypes.func.isRequired
    };
    
    render(){
        const {username, password} = this.state;
        return(
            <LoginForm
                handleInputChange = {this._handleInputChange}
                handleSubmit={this._handleSubmit}
                usernameValue = {username}
                passwordValue = {password}
                handleFacebookLogin = {this._handleFacebookLogin}
            />
        );
    }

    _handleInputChange = event => {
        const { target: { value, name } } = event;
        this.setState({
          [name]: value
        });
        //console.log("this.state ::: ", this.state);
    };

    _handleSubmit = event => {
        const {usernameLogin} = this.props;
        const {username, password} = this.state;
        event.preventDefault();
        usernameLogin(username, password);
    };

    _handleFacebookLogin = response => {
        console.log(response);
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken);
    };
}

export default Container;