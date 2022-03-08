import PostsActionTypes from './posts.types'
import {
  addObject,
  deleteObject,
  editObject,
} from '../../assets/utils/object.utils'

const INITIAL_STATE = {
  posts: null,
  postsError: null,
  post: null,
  postError: null,
}

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostsActionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        postsError: null,
      }
    case PostsActionTypes.GET_POSTS_FAILURE:
      return {
        ...state,
        postsError: action.payload,
      }
    case PostsActionTypes.GET_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        postError: null,
      }
    case PostsActionTypes.GET_POST_FAILURE:
      return {
        ...state,
        postError: action.payload,
      }
    case PostsActionTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: deleteObject(action.payload),
      }
    case PostsActionTypes.UPDATE_POST_SUCCESS:
      return {
        ...state,
        posts: editObject(action.payload),
      }
    case PostsActionTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: addObject(action.payload),
      }
    default:
      return state
  }
}

export default postsReducer
