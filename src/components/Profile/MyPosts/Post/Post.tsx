import React from 'react';
import ava from './avatar.jpg';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.post}>
            <img src={ava} alt="ava"/>
            <div>
                <h2>Post</h2>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;