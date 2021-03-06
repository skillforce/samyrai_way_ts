import React from 'react';
import s from './SideBar.module.css';
import Friends, {FriendsPropsType} from './Friends/Friends';

const {title, titleName} = s;
export type SideBarPropsType = {
    sideBar: FriendsPropsType
    isFetch: boolean
}

const SideBar = (pr: SideBarPropsType) => {

    const {friendsData} = pr.sideBar;
    const {isFetch} = pr;


    if(!isFetch){
        return <div> </div>
    }

    return (
         <div className={title}>
                <div className={titleName}>Мои друзья</div>
                <Friends friendsData={friendsData}/>
            </div>
    )
}


export default SideBar;