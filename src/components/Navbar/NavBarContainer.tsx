import {connect} from 'react-redux';
import NavBar from './Navbar';
import {AppStateType} from '../../Redux/ReduxStore';
import {Dispatch} from 'redux';
import {FriendsPropsType} from './SideBar/Friends/Friends';
import {NavBarType} from '../../Redux/NavBarPage-reducer';


type mapStateToPropsReturnType ={
    navBarLink:NavBarType[]
    sideBar:FriendsPropsType
}

type mapDispatchToPropsReturnType ={}



let mapStateToProps = (state: AppStateType):mapStateToPropsReturnType => {
    return {
        navBarLink: state.navBarPage.navBarLink,
        sideBar: state.sideBar
    }
}

let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsReturnType => {
    return {}

}


const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;