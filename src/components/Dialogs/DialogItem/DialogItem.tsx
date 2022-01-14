import React from 'react';
import classes from '../Dialogs.module.css';
import {Link} from 'react-router-dom';

type DialogItemType = {
    name: string
    id: string
}

const DialogItem: React.FC<DialogItemType> = (props) => {
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <Link to={`/dialogs/${props.id}`}>{props.name}</Link>
        </div>
    )
}

export default DialogItem;