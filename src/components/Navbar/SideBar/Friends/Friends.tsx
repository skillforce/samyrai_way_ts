import React from 'react';
import s from './Friends.module.css';

const {photoBlock, photoBlock_photo, photoBlock_name, titlePhoto} = s;

export type FriendsType ={
    id: number
    name:string
    src:string
}

export type FriendsDataType={
    friendsData:FriendsType[]
}

export type FriendsPropsType ={
    friendsData: FriendsType[]
}



const Friends = (pr:FriendsPropsType) => {

    const{friendsData}=pr;


    const friends = friendsData.map((t:FriendsType) => (
        <div className={photoBlock}>
            <div className={photoBlock_photo}>
                <img src={t.src}/>
            </div>
            <div className={photoBlock_name}>
                {t.name}
            </div>
        </div>

    ))

    return (<div className={titlePhoto}>
            {friends}
        </div>
    )

}
export default Friends;

