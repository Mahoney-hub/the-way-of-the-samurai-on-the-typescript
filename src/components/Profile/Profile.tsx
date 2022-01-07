import React from 'react';
import bg from "./bg_img.jpg";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src={bg} alt="image"/>
            </div>
            <div>ava + description</div>
            <MyPosts/>
            Main content
        </div>
    );
};

export default Profile;