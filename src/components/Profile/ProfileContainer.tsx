import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {SetUsersProfileAC} from '../../Redux/ProfilePage-reducer';





class ProfileContainerAPI extends React.Component<any, any> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
                this.props.SetUsersProfileAC(response.data)
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state:any) => {
    return {
    profile: state.profilePage.profile
    }
}



export const ProfileContainer = connect(mapStateToProps, {SetUsersProfileAC})(ProfileContainerAPI)


export default ProfileContainer;