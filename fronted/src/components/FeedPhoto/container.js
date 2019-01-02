import React, { Component } from "react";
import FeedPhoto from "./presenter";

class Container extends Component {

    state = {
      seeingLikes: false
    };

    render() {
      return (
        <FeedPhoto
          {...this.props}
          {...this.state}
          openLikes={this._openLikes}
          closeLikes={this._closeLikes}
        />
      );
    }
    _openLikes = () => {
        console.log("111111111111111111111"+JSON.stringify(this.props))
      const { getPhotoLikes } = this.props;
      this.setState({
        seeingLikes: true
      });
      getPhotoLikes();
      console.log("222222222222222222222"+JSON.stringify(this.state))
    };    
    _closeLikes = () => {
      this.setState({
        seeingLikes: false
      });
    };
}
  
export default Container;