import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/ReduxStore';
import {
    UsersDataType, getUsers, followUsers, UnFollowUsers
} from '../../Redux/UsersPage-reducer';
import React from 'react';
import UsersPage from './UsersPage';
import Preloader from '../Preloader/Preloader';
import {compose} from 'redux';
import {
    getCurrentPage, getFollowInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsersSuper
} from '../../Redux/user-selector';

type PropsUserClassType = mapDispatchToPropsUsersType & mapStateToPropsUsersType


class UsersAPIContainer extends React.Component<PropsUserClassType> {




    componentDidMount() {
        const{pageSize,currentPage}=this.props;
        this.props.getUsers(currentPage,pageSize)
    }


    onPageChanged = (p: number) => {
        const{getUsers,pageSize}=this.props;
        getUsers(p,pageSize)
    }


    render() {
        return this.props.isFetching ?
            <Preloader/> :
            <>
                <UsersPage UsersData={this.props.UsersData}
                           onPageChanged={this.onPageChanged}
                           totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           isFetching={this.props.isFetching}
                           followInProgress={this.props.followInProgress}
                           followUsers={this.props.followUsers}
                           unFollowUsers={this.props.UnFollowUsers}
                />
            </>
    }
}



let mapStateToProps = (state: AppStateType): mapStateToPropsUsersType => {
    return {
        UsersData: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followInProgress: getFollowInProgress(state),
    }
}
type mapStateToPropsUsersType = {
    UsersData: UsersDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number,
    isFetching: boolean
    followInProgress: number[]
}

type mapDispatchToPropsUsersType = {
    followUsers: (userId:number) => void
    UnFollowUsers: (userId:number) => void,
    getUsers: (currentPage: number, pageSize: number) => any
}



export default compose<React.ComponentType>(
    connect<mapStateToPropsUsersType,mapDispatchToPropsUsersType,{},AppStateType>(mapStateToProps,
        {getUsers, followUsers, UnFollowUsers})
)(UsersAPIContainer)