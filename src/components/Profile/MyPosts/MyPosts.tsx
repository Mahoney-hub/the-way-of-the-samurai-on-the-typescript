import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css'

type PostDataType = {
    id: number
    message: string
    likesCount: number
}

const MyPosts = (props:any) => {
    const postsElement = props.posts
        .map((p:PostDataType) =><Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement:any = React.createRef()

    const addPost = () => {
        props.addPost()
    }
    const onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;