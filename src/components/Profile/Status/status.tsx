import React, {ChangeEvent} from 'react';
import s from './status.module.css';


const {statusProfile, changeStatus} = s

export type StatusPropsType = {
    status: string | null
    updateStatus?: (newMess: string) => void
}

type StateType={
    editMode:boolean
    status:string|null
}


export class Status extends React.Component<StatusPropsType> {



    state:StateType = {
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
        if(this.props.updateStatus) {
            this.props.updateStatus(this.state.status ? this.state.status : 'none')
        }
    }

    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<StatusPropsType>, prevState: Readonly<StateType>) {
        if (prevProps.status !== this.props.status) {
            this.setState(
                {status: this.props.status}
            )
        }
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