import React, {ChangeEventHandler} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import {ProfileResponseType} from '../ProfileContainer';
import PresentProfile from './Experemental/PresentProfile';
import EditProfile from './Experemental/EditProfile';
import {FormDataType} from '../../Login/LoginForm';
import {logInThunk} from '../../../Redux/loginPage-reducer';
import ProfileEditReduxForm from './Experemental/EditProfile';


const {
    descriptionBlock,
    workSearchBlock,
    searchWork,
    descrSearch,
} = s;


type ProfileInfoPropsType = {
    profile: ProfileResponseType | null
    status: null | string
    updateStatus: (newMess: string) => void
    savePhoto: (newPhoto: File) => void
    isOwner: boolean
    initializedNewPhotoProfile: boolean
    isProfileSetMode: boolean
    SetIsProfileSetMode: (newStatus: boolean) => void
}


const ProfileInfo = (props: ProfileInfoPropsType) => {

    const {
        profile,
        status,
        updateStatus,
        isOwner,
        savePhoto,
        initializedNewPhotoProfile,
        isProfileSetMode,
        SetIsProfileSetMode
    } = props;

    const onMainPhotoSelected: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0]);
        }
        e.target.value = '';
    }


    const btnHandler = (newStatus: boolean) => {
        SetIsProfileSetMode(newStatus)
    }


    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        btnHandler(true)
    }

    if (!profile) {
        return (<div>
            <div className={descriptionBlock}>
                <Preloader/>
            </div>
        </div>)
    } else {

        return (
            <div>
                {!isProfileSetMode ?
                    <PresentProfile profile={profile}
                                    status={status}
                                    updateStatus={updateStatus}
                                    isOwner={isOwner}
                                    initializedNewPhotoProfile={initializedNewPhotoProfile}
                                    onMainPhotoSelected={onMainPhotoSelected}
                                    btnHandler={btnHandler}/>
                    :
                    <ProfileEditReduxForm onSubmit={onSubmit}
                                          profile={profile}
                                          status={status}
                                          updateStatus={updateStatus}
                                          isOwner={isOwner}
                                          initializedNewPhotoProfile={initializedNewPhotoProfile}
                                          onMainPhotoSelected={onMainPhotoSelected}
                                          btnHandler={btnHandler}
                    />}

            </div>

        )
    }


}


export default ProfileInfo;