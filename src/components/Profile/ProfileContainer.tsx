import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {
    ACProfileActionType,
    getProfile,
    InitialStateProfileType,
    SetUsersProfile
} from '../../Redux/ProfilePage-reducer';
import { RouteComponentProps, withRouter} from 'react-router-dom';
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
    aboutMe:string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    contacts: ProfileContactsType
    photos: ProfilePhotosType
}

export type ProfileType = {
    profile: ProfileResponseType|null
}

export type stateUsersType = {
    profilePage: InitialStateProfileType
}

type mapDispatchToPropsUsersType = {
    SetUsersProfile: (profile: ProfileType) => ({ type: ACProfileActionType, profile: ProfileType })
    getProfile: (userId: number) => void
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
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}


const mapStateToProps = (state: AppStateType)=> {

    return {
        // @ts-ignore
        profile: state.profilePage.profile
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,{SetUsersProfile, getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainerAPI)