import React from 'react';
import ava from './avatar.jpg';
import classes from './Post.module.css';

type PostType = {
    message: string
    likesCount: number
}

const Post: React.FC<PostType> = (props) => {
    return (
        <div className={classes.post}>
            <img src={ava} alt="ava"/>
            <div>
                <p>{props.message}</p>
                <p>likes: {props.likesCount}</p>
            </div>
        </div>
    );
};

export default Post;