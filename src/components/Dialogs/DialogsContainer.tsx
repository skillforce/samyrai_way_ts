import Dialogs from './Dialogs';
import React from 'react';
import {connect} from 'react-redux';
import {StateType} from '../../Redux/ReduxStore';
import {Dispatch} from 'redux';


let mapStateToProps = (state: StateType) => {
    return {
        messagesData: state.dialogsPage.messagesData,
        dialogsData: state.dialogsPage.dialogsData,
        newOutputMsgText: state.dialogsPage.newOutputMsgText
    }
}

let mapDispatchToProps = (dispatch: Dispatch)=>{
    return {}

}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;