import React from "react";
import PropTypes from "prop-types";
import PhotoActions from "components/PhotoActions";
import styles from "./styles.module.scss";

const FeedPhoto = (props, context) => {
    //console.log(props);
    return (
        <div className={styles.feedPhoto}>
          <header>
            <img
              src={props.creator.profile_image || require("images/noPhoto.png")}
              alt={props.creator.username}
            />
            <div>
              <span>{props.creator.username}</span>
              <span>{props.location}</span>
            </div>
          </header>
          <img src={props.file} alt={props.caption} />
          <div>
            <PhotoActions number={props.like_counts} />
          </div>
        </div>
      );
};

FeedPhoto.propTypes = {
    creator: PropTypes.shape({
      profile_image: PropTypes.string,
      username: PropTypes.string.isRequired
    }).isRequired,
    location: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    like_counts: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        message: PropTypes.string.isRequired,
        creator: PropTypes.shape({
          profile_image: PropTypes.string,
          username: PropTypes.string.isRequired
        }).isRequired
      })
    ).isRequired,
    created_at: PropTypes.string.isRequired
  };

export default FeedPhoto;