import {connect} from 'react-redux';
import {AppStateType} from '../../../Redux/ReduxStore';
import {Dispatch} from 'redux';
import {
    FollowActionCreator,
    SetUsersActionCreator,
    UnfollowActionCreator,
    SetCurrentPageActionCreator,
    SetTotalUserCountActionCreator,
    UsersDataType
} from '../../../Redux/UsersPage-reducer';
import UsersClass from './UsersClass';



type mapStateToPropsUsersType = {
    UsersData: UsersDataType[]
    pageSize:number
    totalUsersCount:number
    currentPage:number
}

type mapDispatchToPropsReturnType = {
    onFollow:(userId:number)=>void
    onUnFollow:(userId:number)=>void
    setUsers:(users:UsersDataType[])=>void
    setCurrentPage:(page:number)=>void
    setTotalUsersCount:(totalUserCount:number)=>void
}

export type UsersClassPropsType = mapStateToPropsUsersType & mapDispatchToPropsReturnType


let mapStateToProps = (state: AppStateType): mapStateToPropsUsersType => {
    return {
        UsersData: state.UsersPage.UsersData,
        pageSize:state.UsersPage.pageSize,
        totalUsersCount:state.UsersPage.totalUsersCount,
        currentPage:state.UsersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsReturnType => {
    return {
        onFollow: (userId: number) => {
            dispatch(FollowActionCreator(userId));
        },
        onUnFollow: (userId: number) => {
            dispatch(UnfollowActionCreator(userId));
        },
        setUsers: (users: UsersDataType[]) => {
            dispatch(SetUsersActionCreator(users));
        },
        setCurrentPage:(page:number)=>{
            dispatch(SetCurrentPageActionCreator(page));
        },
        setTotalUsersCount:(totalUserCount:number)=>{
            dispatch(SetTotalUserCountActionCreator(totalUserCount))
        }
    }

}


const ContainerUsersClass = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default ContainerUsersClass;