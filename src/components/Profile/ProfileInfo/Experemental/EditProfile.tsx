import avatarBlock from '../../../../img/avatarBlock.png';
import {StatusWithHooks} from '../../Status/StatusWithHooks';
import NewAvaPreloader from '../../../../img/NewAvaPreloader.gif';
import React from 'react';
import s from '../ProfileInfo.module.css';


const {
    descriptionBlock,
    avatar,
    fullNameUser,
    photoBlock,
    workSearchBlock,
    reInstall_ava,
    preloaderNewAva,
    contactsBlock_Edit,
    searchWork,
    descrSearch
} = s;


const EditProfile = (props: any) => {

    const {
        profile,
        status,
        updateStatus,
        isOwner,
        initializedNewPhotoProfile,
        onMainPhotoSelected,
        btnHandler
    } = props;

    return (<div className={descriptionBlock}>
            <div className={photoBlock}>
                <div className={fullNameUser}><input value={profile.fullName}/></div>
                <div className={avatar}>
                    {profile.photos?.large ? <img src={profile.photos.large} alt="avatarUser"/>
                        : <img src={avatarBlock} alt="avatarUserNone"/>}
                </div>
                <StatusWithHooks status={status} updateStatus={updateStatus}/>
                {isOwner ? initializedNewPhotoProfile ? <form className={reInstall_ava}>
                    <input type="file" onChange={onMainPhotoSelected}/>
                </form> : <div className={preloaderNewAva}><img src={NewAvaPreloader}/></div> : ' '}
            </div>
            <form className={contactsBlock_Edit}>
                Contact information:
                <button onClick={() => {
                    btnHandler(false)
                }}>Save</button>
                {profile.contacts?.facebook ?
                    <div>Facebook : <input value={profile.contacts.facebook}/></div> :
                    <div>Facebook :<input/></div>}
                {profile.contacts?.website ?
                    <div>Web-site : <input value={profile.contacts.website}/></div> :
                    <div>Web-site : <input/></div>}
                {profile.contacts?.vk ?
                    <div>VK : <input value={profile.contacts.vk}/></div> : <div>VK : <input/></div>}
                {profile.contacts?.twitter ?
                    <div>Twitter : <input value={profile.contacts.twitter}/></div> :
                    <div>Twitter : <input/></div>}
                {profile.contacts?.instagram ?
                    <div>Instagram : <input value={profile.contacts.instagram}/></div> :
                    <div>Instagram :<input/></div>}
                {profile.contacts?.youtube ?
                    <div>YouTube : <input value={profile.contacts.youtube}/></div> :
                    <div>YouTube : <input/></div>}
                {profile.contacts?.github ?
                    <div>GitHub : <input value={profile.contacts.github}/></div> :
                    <div>GitHub : <input/></div>}
                {profile.contacts?.mainLink ?
                    <div>MainLink : <input value={profile.contacts.mainLink}/></div> :
                    <div>MainLink : <input/></div>}
            </form>
            <div className={workSearchBlock}>
                {profile.lookingForAJob ?
                    <div className={searchWork}>I am search a work:<input type="checkbox"
                                                                          value={profile.lookingForAJob}/></div> :
                    <div className={searchWork}>I am search a work?:<input type="checkbox"/></div>}

                {profile.lookingForAJobDescription ?
                    <div className={descrSearch}>Description : <input value={profile.lookingForAJobDescription}/>
                    </div> : <div className={descrSearch}>Description :<input/></div>}
            </div>
        </div>
    )
}


export default EditProfile;