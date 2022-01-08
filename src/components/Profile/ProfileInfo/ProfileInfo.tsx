import React from 'react';
import bg from './bg_img.jpg';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={bg} alt="image"/>
            </div>
            <div className={classes.descriptionBlock}>ava + description</div>
        </div>
    );
};

export default ProfileInfo;