import React, {ChangeEventHandler} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import avatarBlock from '../../../img/avatarBlock.png';
import {ProfileResponseType} from '../ProfileContainer';
import {StatusWithHooks} from '../Status/StatusWithHooks';
import NewAvaPreloader from '../../../img/NewAvaPreloader.gif'


const {
    descriptionBlock,
    avatar,
    contactsBlock,
    fullNameUser,
    photoBlock,
    workSearchBlock,
    searchWork,
    descrSearch,
    reInstall_ava,
    preloaderNewAva
} = s;


type ProfileInfoPropsType = {
    profile: ProfileResponseType | null
    status: null | string
    updateStatus: (newMess: string) => void
    savePhoto: (newPhoto: File) => void
    isOwner: boolean
    initializedNewPhotoProfile:boolean
}


const ProfileInfo = (props: ProfileInfoPropsType) => {

    const {profile, status, updateStatus, isOwner, savePhoto,initializedNewPhotoProfile} = props;

    const onMainPhotoSelected: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0]);
        }
        e.target.value='';
    }


    if (!profile) {
        return (<div>
            <div className={descriptionBlock}>
                <Preloader/>
            </div>
        </div>)
    } else {
        return (
            <div className={descriptionBlock}>
                <div className={photoBlock}>
                    <div className={fullNameUser}>{profile.fullName ? profile.fullName : 'noName noName'}</div>
                    <div className={avatar}>
                        {profile.photos?.large ? <img src={profile.photos.large} alt="avatarUser"/>
                            : <img src={avatarBlock} alt="avatarUserNone"/>}
                    </div>
                    <StatusWithHooks status={status} updateStatus={updateStatus}/>
                    {isOwner && initializedNewPhotoProfile? <form className={reInstall_ava}>
                        <input type="file" onChange={onMainPhotoSelected}/>
                    </form>:<div className={preloaderNewAva}><img src={NewAvaPreloader}/></div>}
                </div>
                {profile.contacts?.facebook ||
                profile.contacts?.website ||
                profile.contacts?.vk ||
                profile.contacts?.twitter ||
                profile.contacts?.instagram ||
                profile.contacts?.youtube ||
                profile.contacts?.github ||
                profile.contacts?.mainLink ? <div className={contactsBlock}>
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
                </div> : ''}
                <div className={workSearchBlock}>
                    {profile.lookingForAJob ?
                        <div className={searchWork}>I am search a work:<input type="checkbox" checked={true}/></div> :
                        <div className={searchWork}>I'm not going to search work!</div>}
                    {profile.lookingForAJobDescription ?
                        <div className={descrSearch}>Description : {profile.lookingForAJobDescription}</div> : ''}
                </div>
            </div>
        )
    }


}


export default ProfileInfo;