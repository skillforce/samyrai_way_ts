import React, {ChangeEvent} from 'react';
import {AddOutputMsgActionType, UpdateNewOutputMsgActionType} from '../../../../Redux/DialogsPage-reducer';
import EnterMessage from './EnterMessage';
import {StateType} from '../../../../Redux/ReduxStore';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';



let mapStateToProps=(state:StateType)=>{
    return{
        newOutputMsgText:state.dialogsPage.newOutputMsgText
    }
}



let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        OnNewMSG: () => {
            dispatch(AddOutputMsgActionType());
        },
        OnNewOutputMsgText: (e: ChangeEvent<HTMLTextAreaElement>) => {
            let newMSG = e.target.value;
            dispatch(UpdateNewOutputMsgActionType(newMSG));
        }
    }
}


const EnterMessageContainer = connect(mapStateToProps, mapDispatchToProps)(EnterMessage);



export default EnterMessageContainer;