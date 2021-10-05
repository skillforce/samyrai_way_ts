import {
    addPost,
    addPostTypeForMyPostContainer,
} from '../../../Redux/ProfilePage-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {PostDataType} from '../Profile';
import {stateUsersType} from '../ProfileContainer';

type DispatchPropsMyPostsType = {
    addPost: addPostTypeForMyPostContainer
}


let mapStateToProps = (state: stateUsersType): PostDataType => {
    return {
        postData: state.profilePage.postData,

    }
}

export type MyPostPropsType = PostDataType & DispatchPropsMyPostsType


const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;