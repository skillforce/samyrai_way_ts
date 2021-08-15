import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {SetUsersProfile} from '../../Redux/ProfilePage-reducer';
import {withRouter} from 'react-router-dom';


class ProfileContainerAPI extends React.Component<any, any> {


    componentDidMount() {
        let usersId = this.props.match.params.userId;

        if(!usersId){
            usersId=2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${usersId}`).then((response) => {
            this.props.SetUsersProfile(response.data)
        });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainerAPI)


export const ProfileContainer = connect(mapStateToProps, {SetUsersProfile})(WithUrlDataContainerComponent)


export default ProfileContainer;