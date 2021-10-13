import React from 'react';
import Header from './Header';
import {getAuthMe} from '../../Redux/Auth-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/ReduxStore';


export type mapStateToPropsHeaderType = {
    login: string | null
    isFetching: boolean | undefined
    id: number | null
    photo: string | undefined
}
type mapDispatchToPropsHeaderType = {
    getAuthMe: (id: number | null) => void
}

type HeaderContainerClassType = mapStateToPropsHeaderType & mapDispatchToPropsHeaderType


class HeaderContainer extends React.Component<HeaderContainerClassType> {


    componentDidMount() {
        this.props.getAuthMe(this.props.id);
    }



    render() {
        return (
            <Header photo={this.props.photo} id={this.props.id} login={this.props.login}
                    isFetching={this.props.isFetching}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsHeaderType => {
    return {
        login: state.Auth.login,
        isFetching: state.Auth.isFetching,
        id: state.Auth.id,
        photo: state.Auth.photo
    }
}


export default connect<mapStateToPropsHeaderType, mapDispatchToPropsHeaderType, {}, AppStateType>(mapStateToProps, {
    getAuthMe
})(HeaderContainer);