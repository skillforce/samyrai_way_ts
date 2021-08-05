import {ActionsDispatchType} from './store';

export type NavBarType = {
    id: number
    link: string
    class: string
    name: string
}




let InitialState = {
    navBarLink: [
        {id: 1, link: '/profile', class: 'item', name: 'Профиль'},
        {id: 2, link: '/dialogs', class: 'item', name: 'Сообщения'},
        {id: 3, link: '/news', class: 'item', name: 'Новости'},
        {id: 4, link: '/music', class: 'item', name: 'Музыка'},
    ] as NavBarType[]
}

export type InitialStateNavBarType = typeof InitialState;


export const NavBarPageReducer = (state: InitialStateNavBarType=InitialState, action: ActionsDispatchType):InitialStateNavBarType => {

    return state;
}


export default NavBarPageReducer;