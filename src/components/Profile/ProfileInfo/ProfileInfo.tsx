import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import avatarBlock from '../../../img/avatarBlock.png';

const {
    descriptionBlock,
    title_img,
    avatar,
    statusProfile,
    contactsBlock,
    fullNameUser,
    photoBlock,
    workSearchBlock,
    searchWork,
    descrSearch
} = s;


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
                <div className={photoBlock}>
                    <div className={fullNameUser}>{profile.fullName ? profile.fullName : 'noName noName'}</div>
                    <div className={avatar}>
                        {profile.photos.large? <img src={profile.photos.large} alt="avatarUser"/>
                            : <img src={avatarBlock} alt="avatarUserNone"/>}
                    </div>
                    {profile.aboutMe?<div className={statusProfile}>status : {profile.aboutMe}</div>:''}
                </div>
                {profile.contacts.facebook ||
                profile.contacts.website ||
                profile.contacts.vk ||
                profile.contacts.twitter ||
                profile.contacts.instagram ||
                profile.contacts.youtube||
                profile.contacts.github ||
                profile.contacts.mainLink?<div className={contactsBlock}>
                    Contact information:
                    {profile.contacts.facebook ?
                        <div>Facebook: <a href={profile.contacts.facebook}>facebook</a></div> : ''}
                    {profile.contacts.website ?
                        <div>Web-site: <a href={profile.contacts.website}>{profile.contacts.website}</a></div> : ''}
                    {profile.contacts.vk ?
                        <div>VK : <a href={profile.contacts.vk}>{profile.contacts.vk}</a></div> : ''}
                    {profile.contacts.twitter ?
                        <div>Twitter : <a href={profile.contacts.twitter}>{profile.contacts.twitter}</a></div> : ''}
                    {profile.contacts.instagram ?
                        <div>Instagram : <a href={profile.contacts.instagram}>{profile.contacts.instagram}</a>
                        </div> : ''}
                    {profile.contacts.youtube ?
                        <div>Youtube : <a href={profile.contacts.youtube}>{profile.contacts.youtube}</a></div> : ''}
                    {profile.contacts.github ?
                        <div> Github : <a href={profile.contacts.github}>{profile.contacts.github}</a></div>
                        : ''}
                    {profile.contacts.mainLink ?
                        <div> MainLink: <a href={profile.contacts.mainLink}>{profile.contacts.mainLink}</a></div> : ''}
                </div>:''}
                <div className={workSearchBlock}>
                    {profile.lookingForAJob ?
                        <div className={searchWork}>I am search a work:<input type="checkbox" checked={true}/></div> :
                        <div className={searchWork}>I'm not going to search work!</div>}
                    {profile.lookingForAJobDescription ?
                        <div className={descrSearch}>Description : {profile.lookingForAJobDescription}</div> : ''}
                </div>
            </div>
        </div>)
    }


}


export default ProfileInfo;