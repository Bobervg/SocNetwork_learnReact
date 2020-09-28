import React from 'react';
import { addPostActionCreator, onChangeNewPostActionCreator } from '../../../Redux/postsPageData-Reducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
    return {
        postsPageData: state.postsPageData
    }
} 
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch (addPostActionCreator ()),
        changeNewPost: (text) => dispatch (onChangeNewPostActionCreator(text))
    }
} 

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);



// const MyPostsContainer = (props) => {
    
    
//     let store = props.store.getState().postsPageData

    
//     const onAddPost = () => {
//         props.store.dispatch (addPostActionCreator ())
//     }
//     const onChangeNewPost = (text) => {
//         props.store.dispatch (onChangeNewPostActionCreator(text))
//     }

//     return (
//         <MyPosts addPost={onAddPost} ChangeNewPost={onChangeNewPost} postsPageData={store}/>
//     )
// }
export default MyPostsContainer;