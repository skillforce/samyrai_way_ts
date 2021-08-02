import {ActionsDispatchType} from './store';
import {FriendsPropsType, FriendsType} from '../components/Navbar/SideBar/Friends/Friends';


export type SideBarType={
    friendsData:FriendsType[]
}

let InitialState = {
    friendsData: [
        {id: 1, name: 'Pein', src: 'https://www.ninjaturtles.ru/forum/pic/22077.jpg'},
        {id: 2, name: 'Kakashi', src: 'https://99px.ru/sstorage/56/2017/04/mid_275722_9456.jpg'},
        {id: 3, name: 'Naruto', src: 'https://klike.net/uploads/posts/2018-09/1536741383_6.jpg'},
    ]
}

export const SideBarReducer = (state: FriendsPropsType = InitialState, action: ActionsDispatchType) => {

    return state;
}


export default SideBarReducer;