import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/ReduxStore';
import {
    setCurrentPage,
    UsersDataType,  getUsers, followUsers, UnFollowUsers
} from '../../Redux/UsersPage-reducer';
import React from 'react';
import UsersPage from './UsersPage';
import Preloader from '../Preloader/Preloader';


class UsersAPIContainer extends React.Component<UsersClassPropsType> {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }


    onPageChanged = (p: number) => {
        this.props.getUsers(p, this.props.pageSize)
    }


    render() {
        return (<>
            {this.props.isFetching ? <Preloader/> :
                <UsersPage UsersData={this.props.UsersData}
                           onPageChanged={this.onPageChanged}
                           totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           isFetching={this.props.isFetching}
                           followInProgress={this.props.followInProgress}
                           followUsers={this.props.followUsers}
                           unFollowUsers={this.props.UnFollowUsers}
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
    followInProgress: [] | number[]
}

export type UsersClassPropsType = mapStateToPropsUsersType & DispatchPropsType


let mapStateToProps = (state: AppStateType): mapStateToPropsUsersType => {
    return {
        UsersData: state.UsersPage.UsersData,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followInProgress: state.UsersPage.followInProgress
    }
}

const dispatchersToProps = {
    setCurrentPage,
    getUsers,
    followUsers,
    UnFollowUsers
}
type DispatchPropsType = typeof dispatchersToProps


const ContainerUsersClass = connect(mapStateToProps,
    {setCurrentPage, getUsers, followUsers, UnFollowUsers})(UsersAPIContainer);


export default ContainerUsersClass;