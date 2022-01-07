import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Добавить пост</button>
            </div>
            <div>
                New post
            </div>
            <div>
                <Post message={'Hi, how are you?'} likesCount={15}/>
                <Post message={`it's my first post`} likesCount={12}/>
            </div>
        </div>
    );
};

export default MyPosts;