import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './status.module.css';


const {statusProfile, changeStatus} = s

type StatusPropsType = {
    status: string | null
    updateStatus: (newMess: string) => void
}


export const StatusWithHooks = (props: StatusPropsType) => {

const [isEditMode,setIsEditMode] = useState<boolean>(false);
const [status,setStatus] = useState<string|null>(props.status);

  useEffect(()=>{
      setStatus(props.status);
  },[props.status])

    const toggleEditModeOn = () => {
       setIsEditMode(true)
    }
    const toggleEditModeOff = () => {
        setIsEditMode(false)
        props.updateStatus(status ? status : 'none')
    }

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }



    return (
        <>
            {isEditMode ? <div className={changeStatus}>
                    <input onBlur={toggleEditModeOff} onChange={onChangeStatus}
                           type="text"
                           autoFocus={true}
                           value={status ? status : ''}/>
                    <button onClick={toggleEditModeOff}>Save</button>
                </div> :
                <div onDoubleClick={toggleEditModeOn}
                     className={statusProfile}>status: {props.status ? props.status : 'none'}</div>}


        </>)

}