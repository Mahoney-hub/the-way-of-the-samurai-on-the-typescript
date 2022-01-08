import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Добавить пост</button>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={classes.posts}>
                <Post message={'Hi, how are you?'} likesCount={15}/>
                <Post message={`it's my first post`} likesCount={12}/>
            </div>
        </div>
    );
};

export default MyPosts;