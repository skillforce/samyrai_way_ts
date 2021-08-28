import React from 'react';
import Header from './Header';
import {
    AllActionType,
    InitialStateHeaderType,
    setUsersHeader, setUsersPhotoHeader
} from '../../Redux/Auth-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/ReduxStore';
import {usersAPI} from '../../API/API';


export type mapStateToPropsHeaderType = {
    login: string | null
    isFetching: boolean | undefined
    id: number | null
    photo: string | undefined
}
type mapDispatchToPropsHeaderType = {
    setUsersHeader: (user: InitialStateHeaderType) => { type: AllActionType, user: InitialStateHeaderType }
    setUsersPhotoHeader: (photo: string | null) => ({ type: AllActionType, photo: string | null })

}

type HeaderContainerClassType = mapStateToPropsHeaderType & mapDispatchToPropsHeaderType


class HeaderContainer extends React.Component<HeaderContainerClassType> {


    componentDidMount() {

      usersAPI.authMe().then((response) => {
                if (response.resultCode === 0) {
                    this.props.setUsersHeader(response.data);
                   usersAPI.getPhoto(this.props.photo).then((response) => {
                            this.props.setUsersPhotoHeader(response.data.photos.small)
                        });
                }

            });

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


export default connect(mapStateToProps, {setUsersHeader, setUsersPhotoHeader})(HeaderContainer);