import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {
    getProfile, getStatus,
    InitialStateProfileType,
    SetUsersProfile, updateStatus, SetUsersForProfileType, savePhoto, SetIsProfileSetMode
} from '../../Redux/ProfilePage-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {AppStateType} from '../../Redux/ReduxStore';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';
import {compose} from 'redux';


type ProfileContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    mainLink: string | null
    youtube: string | null
}

export type ProfilePhotosType = {
    small: string | null
    large: string | null
}


export type ProfileResponseType = {
    aboutMe?: string
    userId?: number
    lookingForAJob?: boolean
    lookingForAJobDescription?: string | null
    fullName?: string
    contacts?: ProfileContactsType
    photos: ProfilePhotosType
}


export type stateUsersType = {
    profilePage: InitialStateProfileType
}

type mapDispatchToPropsUsersType = {
    SetUsersProfile: SetUsersForProfileType
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (newStatus: string) => void
    savePhoto:(photo: File)=>void
    SetIsProfileSetMode:(newStatus: boolean) => void
}


type PropsContainerProfileType = ProfileType & mapDispatchToPropsUsersType


type UserIdType = {
    userId: string

}

type PropsAPIContainerType = RouteComponentProps<UserIdType> & PropsContainerProfileType


class ProfileContainerAPI extends React.Component<PropsAPIContainerType> {

    refreshProfile() {
        let usersId: number = +this.props.match.params.userId;
        if (!usersId) {
            usersId = +this.props.userIdLog;
        }
        this.props.getProfile(usersId);
        this.props.getStatus(usersId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsAPIContainerType>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.match.params.userId !==prevProps.match.params.userId  ) {
            this.refreshProfile()
        }
    }


    render() {
        return <Profile {...this.props} SetIsProfileSetMode={this.props.SetIsProfileSetMode} isProfileSetMode={this.props.isProfileSetMode} initializedNewPhotoProfile={this.props.initializedNewPhotoProfile}  isOwner={isNaN(+this.props.match.params.userId)} profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
    }
}

export type ProfileType = {
    profile: ProfileResponseType | null
    status: null | string
    updateStatus: (newMess: string) => void
    userIdLog: string
    isOwner:boolean
    savePhoto: (newPhoto: File) => void
    initializedNewPhotoProfile:boolean
    isProfileSetMode:boolean
    SetIsProfileSetMode:(newStatus: boolean) => void
}



type MapStateToPropsType = {
    profile: ProfileResponseType | null
    status: string | null
    userIdLog: number | null
    isFetching: boolean
    initializedNewPhotoProfile:boolean
    isProfileSetMode:boolean

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userIdLog: state.Auth.id,
        isFetching: state.Auth.isFetching,
        initializedNewPhotoProfile:state.profilePage.initializedNewPhotoProfile,
        isProfileSetMode:state.profilePage.isProfileSetMode
    }
}


export default compose<React.ComponentType>(
    connect<MapStateToPropsType, mapDispatchToPropsUsersType, {}, AppStateType>(mapStateToProps, {
        SetUsersProfile,
        getProfile,
        getStatus,
        updateStatus,
        savePhoto,
        SetIsProfileSetMode
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainerAPI)