import React, {Component} from "react";
import LoginForm from "./presenter";

class Container extends Component{
    state = {
        username:"",
        password:""
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
        event.preventDefault();
        //console.log("_handleSubmit this.state ::: ", this.state);
    };

    _handleFacebookLogin = response => {
        console.log(response);
    };
}

export default Container;