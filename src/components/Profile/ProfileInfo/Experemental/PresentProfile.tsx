import avatarBlock from '../../../../img/avatarBlock.png';
import {StatusWithHooks} from '../../Status/StatusWithHooks';
import NewAvaPreloader from '../../../../img/NewAvaPreloader.gif';
import React from 'react';
import s from '../ProfileInfo.module.css';

const {
    descriptionBlock,
    avatar,
    contactsBlock,
    fullNameUser,
    photoBlock,
    reInstall_ava,
    preloaderNewAva,
    workSearchBlock,
    searchWork,
    descrSearch

} = s;


const PresentProfile = (props: any) => {

    const {
        profile,
        status,
        updateStatus,
        isOwner,
        initializedNewPhotoProfile,
        onMainPhotoSelected,
        btnHandler
    } = props;

    return (
        <div className={descriptionBlock}>
            <div className={photoBlock}>
                <div className={fullNameUser}>{profile.fullName ? profile.fullName : 'noName noName'}</div>
                <div className={avatar}>
                    {profile.photos?.large ? <img src={profile.photos.large} alt="avatarUser"/>
                        : <img src={avatarBlock} alt="avatarUserNone"/>}
                </div>
                <StatusWithHooks status={status} updateStatus={updateStatus}/>
                {isOwner ? initializedNewPhotoProfile ? <form className={reInstall_ava}>
                    <input type="file" onChange={onMainPhotoSelected}/>
                </form> : <div className={preloaderNewAva}><img src={NewAvaPreloader}/></div> : ' '}
            </div>
            <div className={contactsBlock}>
                Contact information:
                <button onClick={() => {
                    btnHandler(true)
                }}>To EditMode</button>
                {profile.contacts?.facebook ?
                    <div>Facebook: <a href={profile.contacts.facebook}>facebook</a></div> :
                    <div>Facebook : </div>}
                {profile.contacts?.website ?
                    <div>Web-site: <a href={profile.contacts.website}>{profile.contacts.website}</a></div> :
                    <div>Web-site : </div>}
                {profile.contacts?.vk ?
                    <div>VK : <a href={profile.contacts.vk}>{profile.contacts.vk}</a></div> : <div>VK : </div>}
                {profile.contacts?.twitter ?
                    <div>Twitter : <a href={profile.contacts.twitter}>{profile.contacts.twitter}</a></div> :
                    <div>Twitter: </div>}
                {profile.contacts?.instagram ?
                    <div>Instagram : <a href={profile.contacts.instagram}>{profile.contacts.instagram}</a>
                    </div> : <div>Instagram: </div>}
                {profile.contacts?.youtube ?
                    <div>Youtube : <a href={profile.contacts.youtube}>{profile.contacts.youtube}</a></div> :
                    <div>YouTube: </div>}
                {profile.contacts?.github ?
                    <div> Github : <a href={profile.contacts.github}>{profile.contacts.github}</a></div> :
                    <div>Github: </div>}
                {profile.contacts?.mainLink ?
                    <div> MainLink: <a href={profile.contacts.mainLink}>{profile.contacts.mainLink}</a></div> :
                    <div>MainLink: </div>}
            </div>
            <div className={workSearchBlock}>
                {profile.lookingForAJob ?
                    <div className={searchWork}>I am search a work:<input type="checkbox" checked={true}/></div> :
                    <div className={searchWork}>I'm not going to search work!</div>}
                {profile.lookingForAJobDescription ?
                    <div className={descrSearch}>Description : {profile.lookingForAJobDescription}</div> :<div className={descrSearch}>Description : </div>}
            </div>
        </div>
    )

}


export default PresentProfile;