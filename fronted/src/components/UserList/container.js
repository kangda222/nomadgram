import React, { Component } from "react";
import PropTypes from 'prop-types';
import UserList from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };

  static propTypes = {
    getPhotoLikes: PropTypes.func.isRequired
  };
  
  componentWillReceiveProps(nextProps) {
      console.log("77777777777777777777777"+JSON.stringify(nextProps))
    if (nextProps.userList) {
      this.setState({
        loading: false
      });
    }
  }
  
  render() {
    console.log(JSON.stringify(this.props)+"======================"+JSON.stringify(this.state));
    const { userList } = this.props;  
    return <UserList {...this.props} {...this.state} userList={userList}/>;
  }
}

export default Container;