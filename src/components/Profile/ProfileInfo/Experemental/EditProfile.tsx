import avatarBlock from '../../../../img/avatarBlock.png';
import {StatusWithHooks} from '../../Status/StatusWithHooks';
import NewAvaPreloader from '../../../../img/NewAvaPreloader.gif';
import React from 'react';
import s from '../ProfileInfo.module.css';
import {createField, InputValid} from '../../../common/FormsControls/FormsControls';
import {requiredField} from '../../../../utils/validators';
import {maxLength30} from '../../MyPosts/ReduxMyPostForm';
import {reduxForm} from 'redux-form';


const {
    descriptionBlock,
    avatar,
    fullNameUser,
    photoBlock,
    workSearchBlockEdit,
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
        btnHandler,
    } = props;


    return (<form onSubmit={props.handleSubmit} >
            <div className={descriptionBlock}>
            <div className={photoBlock}>
                <div
                    className={fullNameUser}>FullName: {createField('fullName', InputValid, {type: 'text'}, profile.fullName, [requiredField, maxLength30])}</div>
                <div className={avatar}>
                    {profile.photos?.large ? <img src={profile.photos.large} alt="avatarUser"/>
                        : <img src={avatarBlock} alt="avatarUserNone"/>}
                </div>
                <StatusWithHooks status={status} updateStatus={updateStatus}/>
                {isOwner ? initializedNewPhotoProfile ? <div className={reInstall_ava}>
                    <input type="file" onChange={onMainPhotoSelected}/>
                </div> : <div className={preloaderNewAva}><img src={NewAvaPreloader}/></div> : ' '}
            </div>
            <div className={contactsBlock_Edit}>
                Contact information:
                <button>Save</button>
                <div>Facebook:{createField('facebook', InputValid, {type: 'text'}, profile.contacts.facebook, [requiredField, maxLength30])}</div>
                <div>Web-site : {createField('website', InputValid, {type: 'text'}, profile.contacts.website, [requiredField, maxLength30])}</div>
                <div>VK: {createField('vk', InputValid, {type: 'text'}, profile.contacts.vk, [requiredField, maxLength30])}</div>
                <div>Twitter : {createField('twitter', InputValid, {type: 'text'}, profile.contacts.twitter, [requiredField, maxLength30])}</div>
                <div>Instagram : {createField('instagram', InputValid, {type: 'text'}, profile.contacts.instagram, [requiredField, maxLength30])}</div>
                <div>YouTube : {createField('youtube', InputValid, {type: 'text'}, profile.contacts.youtube, [requiredField, maxLength30])}</div>
                <div>GitHub : {createField('github', InputValid, {type: 'text'}, profile.contacts.github, [requiredField, maxLength30])}</div>
                <div>MainLink : {createField('mainLink', InputValid, {type: 'text'}, profile.contacts.mainLink, [requiredField, maxLength30])}</div>
            </div>
            <div className={workSearchBlockEdit}>
                <div className={searchWork}>Do you search a work?:{createField('lookingForAJob', 'input', {type: 'checkbox'}, null, null)}</div>

                <div className={descrSearch}>Description:{createField('lookingForAJobDescription', InputValid, {type: 'text'}, profile.lookingForAJobDescription, [requiredField, maxLength30])}</div>
            </div>

            </div>
        </form>
    )
}


const ProfileEditReduxForm = reduxForm<any, any>({form: 'edit_profile'})(EditProfile)


export default ProfileEditReduxForm;