import React, {ChangeEvent, JSXElementConstructor} from 'react';
import s from './status.module.css';


const {statusProfile, changeStatus} = s

type StatusPropsType = {
    status: string | null
    updateStatus: (newMess: string) => void
}


export class Status extends React.Component<StatusPropsType> {



    state = {
        editMode: false,
        status: this.props.status
    }


    toggleEditModeOn = () => {
        this.setState({
            editMode: true
        })
    }


    toggleEditModeOff = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status ? this.state.status : 'none')
    }

    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }


    render() {
        return (
            <>
                {this.state.editMode ? <div className={changeStatus}>
                        <input onBlur={this.toggleEditModeOff} onChange={this.onChangeStatus}
                               type="text"
                               autoFocus={true}
                               value={this.state.status ? this.state.status : ''}/>
                        <button onClick={this.toggleEditModeOff}>Save</button>
                    </div> :
                    <div onDoubleClick={this.toggleEditModeOn}
                         className={statusProfile}>status: {this.props.status ? this.props.status : 'none'}</div>}


            </>)

    }
}