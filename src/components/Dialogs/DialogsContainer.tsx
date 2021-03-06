import Dialogs from './Dialogs';
import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/ReduxStore';
import {compose, Dispatch} from 'redux';
import {DialogsNamesType} from './dialogItems/dialogItems';
import {MessageType} from './message/message';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';


export type mapStateToPropsDialogsType = {
    dialogsData: DialogsNamesType[]
    messagesData: MessageType
}

export type mapDispatchToPropsType = {}

let mapStateToProps = (state: AppStateType): mapStateToPropsDialogsType => {
    return {
        messagesData: state.dialogsPage.messagesData,
        dialogsData: state.dialogsPage.dialogsData,
    }
}


let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {}

}




export default compose<React.ComponentType>(
    connect<mapStateToPropsDialogsType,{},{},AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);