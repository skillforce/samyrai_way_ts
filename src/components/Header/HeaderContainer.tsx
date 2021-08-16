import React from 'react';
import Header from './Header';
import axios from 'axios';
import {
    AllActionType,
    InitialStateHeaderType,
    setUsersHeader
} from '../../Redux/Auth-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/ReduxStore';

export type mapStateToPropsHeaderType = {
    login: string | null
    isFetching: boolean | undefined
}
type mapDispatchToPropsHeaderType = {
    setUsersHeader: (user: InitialStateHeaderType) => { type: AllActionType, user: InitialStateHeaderType }

}

type HeaderContainerClassType = mapStateToPropsHeaderType & mapDispatchToPropsHeaderType


class HeaderContainer extends React.Component<HeaderContainerClassType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me/`, {
            withCredentials: true
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    this.props.setUsersHeader(response.data.data)
                }
            });

    }


    render() {
        return (
            <Header login={this.props.login} isFetching={this.props.isFetching}/>
        );
    }
}

const mapStateToProps = (state: AppStateType):mapStateToPropsHeaderType => {
    return {
        login: state.Auth.login,
        isFetching: state.Auth.isFetching
    }
}


export default connect(mapStateToProps, {setUsersHeader})(HeaderContainer);