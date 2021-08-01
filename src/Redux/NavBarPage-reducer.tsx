import {ActionsDispatchType} from './store';
import {NavBarPageType} from '../components/Navbar/Navbar';


let InitialState = {
    navBarLink: [
        {id: 1, link: '/profile', class: 'item', name: 'Профиль'},
        {id: 2, link: '/dialogs', class: 'item', name: 'Сообщения'},
        {id: 3, link: '/news', class: 'item', name: 'Новости'},
        {id: 4, link: '/music', class: 'item', name: 'Музыка'},
    ]
}

export const NavBarPageReducer = (state: NavBarPageType=InitialState, action: ActionsDispatchType) => {

    return state;
}


export default NavBarPageReducer;