import React, {ChangeEvent, useState} from 'react';
import s from './status.module.css';
import {ProfileResponseType} from '../ProfileContainer';
import {render} from '@testing-library/react';

const {statusProfile, changeStatus} = s

type StatusPropsType = {
    status: string | null
}


export class Status extends React.Component<any, any> {

    state = {
        editMode: false,
        status:this.props.status

    }


    toggleEditMode=()=> {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return (
            <>
                {this.state.editMode ? <div className={changeStatus}>
                        <input onBlur={this.toggleEditMode} type="text" autoFocus={true} value={this.props.status ? this.props.status : 'none'}/>
                        <button onClick={this.toggleEditMode}>Save</button>
                    </div> :
                    <div onDoubleClick={this.toggleEditMode}
                         className={statusProfile}>status: {this.props.status ? this.props.status : 'none'}</div>}


            </>)

    }
}