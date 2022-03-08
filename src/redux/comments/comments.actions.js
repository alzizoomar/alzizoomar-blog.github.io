import CommentsActionTypes from './comments.types'
import { get, postRequest, putRequest, remove } from '../../assets/utils/api'
import { showSpinner, hideSpinner } from '../../assets/utils/utils'

export const getCommentsStart = (postId) => ({
  type: CommentsActionTypes.GET_COMMENTS_START,
  payload: postId,
})

export const getCommentsSuccess = (comments) => ({
  type: CommentsActionTypes.GET_COMMENTS_SUCCESS,
  payload: comments,
})

export const getCommentsFailure = (error) => ({
  type: CommentsActionTypes.GET_COMMENTS_FAILURE,
  payload: error,
})

export const getCommentsAsync = (postId) => (dispatch) => {
  dispatch(getCommentsStart())
  showSpinner()
  get(`/comments?postId=${postId}`)
    .then((res) => {
      dispatch(getCommentsSuccess(res.data))
      hideSpinner()
    })
    .catch((err) => {
      dispatch(getCommentsFailure(err.message))
      hideSpinner()
    })
}

export const createCommentStart = (comment) => ({
  type: CommentsActionTypes.CREATE_COMMENT_START,
  payload: comment,
})

export const createCommentSuccess = (payload) => ({
  type: CommentsActionTypes.CREATE_COMMENT_SUCCESS,
  payload,
})

export const createCommentFailure = (error) => ({
  type: CommentsActionTypes.CREATE_COMMENT_FAILURE,
  payload: error,
})

export const createCommentAsync = (comment) => (dispatch, getState) => {
  dispatch(createCommentStart())
  showSpinner()
  postRequest(`/comments`, comment)
    .then(() => {
      const { commentsArr } = getState().comments
      const lastId =
        commentsArr && commentsArr.length > 0
          ? commentsArr[commentsArr.length - 1].id
          : 0
      const commentObj = { ...comment, id: lastId + 1 }
      dispatch(
        createCommentSuccess({
          object: commentObj,
          objects: commentsArr,
        }),
      )
      hideSpinner()
    })
    .catch((err) => {
      dispatch(createCommentFailure(err.message))
      hideSpinner()
    })
}

export const updateCommentStart = (comment) => ({
  type: CommentsActionTypes.UPDATE_COMMENT_START,
  payload: comment,
})

export const updateCommentSuccess = (payload) => ({
  type: CommentsActionTypes.UPDATE_COMMENT_SUCCESS,
  payload,
})

export const updateCommentFailure = (error) => ({
  type: CommentsActionTypes.UPDATE_COMMENT_FAILURE,
  payload: error,
})

export const updateCommentAsync = (comment) => (dispatch, getState) => {
  dispatch(updateCommentStart())
  showSpinner()
  putRequest(`/comments/${comment.id}`, comment)
    .then(() => {
      dispatch(
        updateCommentSuccess({
          object: comment,
          objects: getState().comments.commentsArr,
        }),
      )
      hideSpinner()
    })
    .catch((err) => {
      dispatch(updateCommentFailure(err.message))
      hideSpinner()
    })
}

export const deleteCommentStart = (payload) => ({
  type: CommentsActionTypes.DELETE_COMMENT_START,
  payload,
})

export const deleteCommentSuccess = (payload) => ({
  type: CommentsActionTypes.DELETE_COMMENT_SUCCESS,
  payload,
})

export const deleteCommentFailure = (error) => ({
  type: CommentsActionTypes.DELETE_COMMENT_FAILURE,
  payload: error,
})

export const deleteCommentAsync = (commentId) => (dispatch, getState) => {
  dispatch(deleteCommentStart())
  showSpinner()
  remove(`/comments/${commentId}`)
    .then(() => {
      dispatch(
        deleteCommentSuccess({
          objectId: commentId,
          objects: getState().comments.commentsArr,
        }),
      )
      hideSpinner()
    })
    .catch((err) => {
      dispatch(deleteCommentFailure(err.message))
      hideSpinner()
    })
}
