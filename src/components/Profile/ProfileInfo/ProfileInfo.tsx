import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';

const {descriptionBlock, title_img} = s;


type ProfileInfoPropsType = {
    src: string
    profile: any
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    const {src, profile} = props;
    if (!profile) {
        return (<div>
            <div className={title_img}>
                <img alt="ava" src={src}/>
            </div>
            <div className={descriptionBlock}>
                <Preloader/>
            </div>
        </div>)
    } else {
        return (<div>
            <div className={title_img}>
                <img alt="ava" src={src}/>
            </div>
            <div className={descriptionBlock}>
                <div>
                    <img src={profile.photos.small} alt="avatarUser"/></div>
                <div>{profile.aboutMe}</div>
            </div>
        </div>)
    }


}


export default ProfileInfo;