import React, {ChangeEvent} from 'react';
import {AddOutputMsgActionType, UpdateNewOutputMsgActionType} from '../../../../Redux/DialogsPage-reducer';
import EnterMessage from './EnterMessage';
import {AppStateType} from '../../../../Redux/ReduxStore';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';


type mapStateToPropsReturnType = {
    newOutputMsgText: string | ''
}

type mapDispatchToPropsReturnType = {
    OnNewMSG: () => void
    OnNewOutputMsgText: (e: ChangeEvent<HTMLTextAreaElement>) => void
}


let mapStateToProps = (state: AppStateType): mapStateToPropsReturnType => {
    return {
        newOutputMsgText: state.dialogsPage.newOutputMsgText
    }
}


let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsReturnType => {
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

export type EnterMessagePropsType = mapStateToPropsReturnType & mapDispatchToPropsReturnType;


const EnterMessageContainer = connect(mapStateToProps, mapDispatchToProps)(EnterMessage);


export default EnterMessageContainer;