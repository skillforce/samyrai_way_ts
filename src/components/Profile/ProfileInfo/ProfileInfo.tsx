import React, {ChangeEventHandler} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import {ProfileResponseType} from '../ProfileContainer';
import PresentProfile from './Experemental/PresentProfile';
import ProfileEditReduxForm from './Experemental/EditProfile';
import {TrueFormDataProfileType} from '../../../Redux/ProfilePage-reducer';


const {
    descriptionBlock,
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
    saveProfile: (profile: TrueFormDataProfileType) => any // if unCorrect input saveProfile returned Promise.reject
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
        SetIsProfileSetMode,
        saveProfile
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


    const onSubmit = (formData: TrueFormDataProfileType) => {
        saveProfile(formData).then(() => btnHandler(false))
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
                    <ProfileEditReduxForm initialValues={profile}
                                          onSubmit={onSubmit}
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