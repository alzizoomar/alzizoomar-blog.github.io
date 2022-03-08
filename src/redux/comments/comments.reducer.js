import CommentsActionTypes from './comments.types'
import {
  addObject,
  deleteObject,
  editObject,
} from '../../assets/utils/object.utils'

const INITIAL_STATE = {
  commentsArr: null,
  commentsError: null,
}

const commentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CommentsActionTypes.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        commentsArr: action.payload,
        commentsError: null,
      }
    case CommentsActionTypes.GET_COMMENTS_FAILURE:
      return {
        ...state,
        commentsError: action.payload,
      }
    case CommentsActionTypes.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        commentsArr: deleteObject(action.payload),
      }
    case CommentsActionTypes.UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        commentsArr: editObject(action.payload),
      }
    case CommentsActionTypes.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        commentsArr: addObject(action.payload),
      }
    default:
      return state
  }
}

export default commentsReducer
