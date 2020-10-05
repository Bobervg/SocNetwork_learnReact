import React from 'react';
import { addPostActionCreator, onChangeNewPostActionCreator } from '../../../Redux/profilePageData-Reducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
    return {
        postsPageData: state.profilePageData
    }
} 
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch (addPostActionCreator ()),
        changeNewPost: (text) => dispatch (onChangeNewPostActionCreator(text))
    }
} 

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;