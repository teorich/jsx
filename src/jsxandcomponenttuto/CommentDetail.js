import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a className="avatar" href="/">
        <img src={faker.image.avatar()} alt="avatar"></img>
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <div className="date">2 days ago</div>
          <div className="rating">
            <i className="star icon"></i>5 Faves
          </div>
        </div>
        <div className="text">
          Hey guys, I hope this example comment is helping you read this
          documentation.
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
