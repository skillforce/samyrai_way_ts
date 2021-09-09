import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {
    ACProfileActionType,
    getProfile, getStatus,
    InitialStateProfileType,
    SetUsersProfile, updateStatus
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

type ProfilePhotosType = {
    small: string | null
    large: string | null
}


export type ProfileResponseType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    contacts: ProfileContactsType
    photos: ProfilePhotosType
}

export type ProfileType = {
    profile: ProfileResponseType | null
    status:null|string
    updateStatus:(newMess:string)=>void
}

export type stateUsersType = {
    profilePage: InitialStateProfileType
}

type mapDispatchToPropsUsersType = {
    SetUsersProfile: (profile: ProfileType) => ({ type: ACProfileActionType, profile: ProfileType })
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus:(newStatus: string) => void
}


type PropsContainerProfileType = ProfileType & mapDispatchToPropsUsersType


type UserIdType = {
    userId: string
}

type PropsAPIContainerType = RouteComponentProps<UserIdType> & PropsContainerProfileType


class ProfileContainerAPI extends React.Component<PropsAPIContainerType> {


    componentDidMount() {
        let usersId: number = +this.props.match.params.userId;

        if (!usersId) {
            usersId = 18877;
        }
        this.props.getProfile(usersId);
        this.props.getStatus(usersId);

    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}


const mapStateToProps = (state: AppStateType) => {


    return {
        // @ts-ignore
        profile: state.profilePage.profile,
        // @ts-ignore
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {SetUsersProfile, getProfile, getStatus,updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainerAPI)