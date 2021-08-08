import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/ReduxStore';
import {Dispatch} from 'redux';
import {Users} from './Users';
import {
    FollowActionCreator,
    SetUsersActionCreator,
    UnfollowActionCreator,
    UsersDataType
} from '../../Redux/UsersPage-reducer';


type mapStateToPropsUsersType = {
    UsersData: UsersDataType[]
}

type mapDispatchToPropsReturnType = {
    onFollow:(userId:number)=>void
    onUnFollow:(userId:number)=>void
    setUsers:(users:UsersDataType[])=>void
}


let mapStateToProps = (state: AppStateType): mapStateToPropsUsersType => {
    return {
        UsersData: state.UsersPage.UsersData
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
        }

    }

}


const ContainerUsers = connect(mapStateToProps, mapDispatchToProps)(Users);

export default ContainerUsers;