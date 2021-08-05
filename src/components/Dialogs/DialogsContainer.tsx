import Dialogs from './Dialogs';
import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/ReduxStore';
import {Dispatch} from 'redux';
import {DialogsNamesType} from './dialogItems/dialogItems';
import {MessageType} from './message/message';




export type mapStateToPropsDialogsType = {
    dialogsData: DialogsNamesType[]
    messagesData: MessageType
    newOutputMsgText: string | ''
}

type mapDispatchToPropsType ={}

let mapStateToProps = (state: AppStateType):mapStateToPropsDialogsType => {
    return {
        messagesData: state.dialogsPage.messagesData,
        dialogsData: state.dialogsPage.dialogsData,
        newOutputMsgText: state.dialogsPage.newOutputMsgText
    }
}

let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType=>{
    return {}

}

export type DialogsPropsType = mapStateToPropsDialogsType & mapDispatchToPropsType

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;