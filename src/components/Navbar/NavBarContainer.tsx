import {connect} from 'react-redux';
import NavBar from './Navbar';
import {StateType} from '../../Redux/ReduxStore';
import {Dispatch} from 'redux';


let mapStateToProps = (state: StateType) => {
    return {
        navBarLink: state.navBarPage.navBarLink,
        sideBar: state.sideBar
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {}

}


const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;