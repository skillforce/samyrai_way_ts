import React from 'react';
import s from './ProfileInfo.module.css';

const {descriptionBlock,title_img} = s;

type ProfileInfo = {
    src: string
}

const ProfileInfo = (props: ProfileInfo) => {
    const {src} = props;
    return (
        <div>
            <div className={title_img}>
                <img alt="ava" src={src}/>
            </div>
            <div className={descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}


export default ProfileInfo;