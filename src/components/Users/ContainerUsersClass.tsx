import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/ReduxStore';
import {
    onFollow,
    onUnFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    UsersDataType
} from '../../Redux/UsersPage-reducer';
import React from 'react';
import axios from 'axios';
import UsersPage from './UsersPage';
import Preloader from '../Preloader/Preloader';


class UsersAPIContainer extends React.Component<UsersClassPropsType> {


    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }


    onPageChanged = (p: number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items)
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
}

export type UsersClassPropsType = mapStateToPropsUsersType & DispatchPropsType


let mapStateToProps = (state: AppStateType): mapStateToPropsUsersType => {
    return {
        UsersData: state.UsersPage.UsersData,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching
    }
}

const dispatchersToProps = {
    onFollow,
    onUnFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
}
type DispatchPropsType = typeof dispatchersToProps


const ContainerUsersClass = connect(mapStateToProps,
    {onFollow, onUnFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersAPIContainer);

export default ContainerUsersClass;