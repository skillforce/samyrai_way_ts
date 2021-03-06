import React from 'react';
import s from './Friends.module.css';

const {photoBlock, photoBlock_photo, photoBlock_name, titlePhoto} = s;

export type FriendsType ={
    id: number
    name:string
    src:string
}

export type FriendsPropsType ={
    friendsData: FriendsType[]
}



const Friends = (pr:FriendsPropsType) => {

    const{friendsData}=pr;


    const friends = friendsData? friendsData.map((t:FriendsType) => (
        <div key={t.id} className={photoBlock}>
            <div className={photoBlock_photo}>
                <img src={t.src} alt={'friendBlockPhoto'}/>
            </div>
            <div className={photoBlock_name}>
                {t.name}
            </div>
        </div>

    )):''

    return (<div className={titlePhoto}>
            {friends}
        </div>
    )

}
export default Friends;

