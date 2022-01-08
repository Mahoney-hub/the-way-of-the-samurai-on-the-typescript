import React from 'react';
import classes from './Dialogs.module.css';
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

type MessageType = {
    message: string
}

const Message:React.FC < MessageType > = (props) => {
    return <div className={classes.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={'Dimych'} id={'1'}/>
                <DialogItem name={'Andrey'} id={'2'}/>
                <DialogItem name={'Sveta'} id={'3'}/>
                <DialogItem name={'Sasha'} id={'4'}/>
                <DialogItem name={'Victor'} id={'5'}/>
                <DialogItem name={'Valera'} id={'6'}/>
            </div>
            <div className={classes.messages}>
                <Message message={'Hi'}/>
                <Message message={'How is your it-kamasutra'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    );
};

export default Dialogs;