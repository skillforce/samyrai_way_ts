import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/ReduxStore';
import {
    onFollow,
    onUnFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    UsersDataType, toggleIsFollowingProgress
} from '../../Redux/UsersPage-reducer';
import React from 'react';
import UsersPage from './UsersPage';
import Preloader from '../Preloader/Preloader';
import {usersAPI} from '../../API/API';


class UsersAPIContainer extends React.Component<UsersClassPropsType> {


    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((response) => {
                this.props.setUsers(response.items)
                this.props.setTotalUsersCount(response.totalCount);
                this.props.toggleIsFetching(false);
            });
    }


    onPageChanged = (p: number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(p);
        usersAPI.getUsers(p, this.props.pageSize).then((response: any) => {
                this.props.setUsers(response.items)
                this.props.toggleIsFetching(false);
            });
    }


    render() {
        return (<>
            {this.props.isFetching ? <Preloader/> :
                <UsersPage UsersData={this.props.UsersData}
                           onPageChanged={this.onPageChanged}
                           totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           onFollow={this.props.onFollow}
                           onUnFollow={this.props.onUnFollow}
                           isFetching={this.props.isFetching}
                           followInProgress={this.props.followInProgress}
                           toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                />}
        </>)
    }
}


type mapStateToPropsUsersType = {
    UsersData: UsersDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number,
    isFetching: boolean
    followInProgress:[]|number[]
}

export type UsersClassPropsType = mapStateToPropsUsersType & DispatchPropsType


let mapStateToProps = (state: AppStateType): mapStateToPropsUsersType => {
    return {
        UsersData: state.UsersPage.UsersData,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followInProgress:state.UsersPage.followInProgress
    }
}

const dispatchersToProps = {
    onFollow,
    onUnFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingProgress
}
type DispatchPropsType = typeof dispatchersToProps


const ContainerUsersClass = connect(mapStateToProps,
    {onFollow, onUnFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,toggleIsFollowingProgress})(UsersAPIContainer);

export default ContainerUsersClass;