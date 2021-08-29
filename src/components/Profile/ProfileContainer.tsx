import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {
    ACProfileActionType,
    getProfile,
    InitialStateProfileType,
    SetUsersProfile
} from '../../Redux/ProfilePage-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {usersAPI} from '../../API/API';


type ProfileContactsType = {
    github:string|null
    vk:string|null
    facebook:string|null
    instagram:string|null
    twitter:string|null
    website:string|null
    mainLink:string|null
    youtube:string|null
}

type ProfilePhotosType = {
        small:string|null
        large:string|null
}


type ProfileResponseType={
    userId:number
    lookingForAJob:boolean
    lookingForAJobDescription:string|null
    fullName:string
    contacts:ProfileContactsType
    photos:ProfilePhotosType
}

 export type ProfileType ={
    profile:ProfileResponseType | null
}

export type stateUsersType={
    profilePage:InitialStateProfileType
}

type mapDispatchToPropsUsersType ={
    SetUsersProfile:(profile:ProfileType)=>({type: ACProfileActionType, profile:ProfileType})
    getProfile:(userId:number)=>void
}


type PropsContainerProfileType = ProfileType & mapDispatchToPropsUsersType


type UserIdType ={
    userId:string
}

type PropsAPIContainerType = RouteComponentProps <UserIdType> & PropsContainerProfileType






class ProfileContainerAPI extends React.Component<PropsAPIContainerType> {


    componentDidMount() {
        let usersId: number = +this.props.match.params.userId;

        if(!usersId){
            usersId=2;
        }
        this.props.getProfile(usersId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}



const mapStateToProps = (state:stateUsersType):ProfileType => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainerAPI)


export const ProfileContainer = connect(mapStateToProps, {SetUsersProfile,getProfile})(WithUrlDataContainerComponent)


export default ProfileContainer;