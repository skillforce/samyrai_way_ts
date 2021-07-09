import React from 'react';
import s from './dialogsItems.module.css';
import {NavLink} from 'react-router-dom';


const {dialog, activeDialog, dialogPhoto} = s;


export type DialogsNamesType = {
    id: number
    name: string
    photo: string
}


const DialogItem = (props: DialogsNamesType) => {
    const {id, name, photo} = props;
    let path = '/dialogs/' + id;
    return (<div className={dialog}>
            <div><NavLink to={path} activeClassName={activeDialog}>{name}</NavLink></div>
            <div className={dialogPhoto}><img src={photo} alt=""/></div>


        </div>
    )
}

export default DialogItem;