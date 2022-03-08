import PostsActionTypes from './posts.types'
import { get, putRequest, remove, postRequest } from '../../assets/utils/api'
import { showSpinner, hideSpinner } from '../../assets/utils/utils'

export const getPostsStart = () => ({
  type: PostsActionTypes.GET_POSTS_START,
})

export const getPostsSuccess = (posts) => ({
  type: PostsActionTypes.GET_POSTS_SUCCESS,
  payload: posts,
})

export const getPostsFailure = (error) => ({
  type: PostsActionTypes.GET_POSTS_FAILURE,
  payload: error,
})

export const getPostsAsync = () => (dispatch) => {
  dispatch(getPostsStart())
  showSpinner()
  get('/posts')
    .then((res) => {
      dispatch(getPostsSuccess(res.data))
      hideSpinner()
    })
    .catch((err) => {
      dispatch(getPostsFailure(err.message))
      hideSpinner()
    })
}

export const getPostStart = (id) => ({
  type: PostsActionTypes.GET_POST_START,
  payload: id,
})

export const getPostSuccess = (post) => ({
  type: PostsActionTypes.GET_POST_SUCCESS,
  payload: post,
})

export const getPostFailure = (error) => ({
  type: PostsActionTypes.GET_POST_FAILURE,
  payload: error,
})

export const getPostAsync = (params) => (dispatch) => {
  dispatch(getPostStart())
  showSpinner()
  get(`/posts/${params}`)
    .then((res) => {
      dispatch(getPostSuccess(res.data))
      hideSpinner()
    })
    .catch((err) => {
      dispatch(getPostFailure(err.message))
      hideSpinner()
    })
}

export const createPostStart = () => ({
  type: PostsActionTypes.CREATE_POST_START,
})

export const createPostSuccess = (payload) => ({
  type: PostsActionTypes.CREATE_POST_SUCCESS,
  payload,
})

export const createPostFailure = (error) => ({
  type: PostsActionTypes.CREATE_POST_FAILURE,
  payload: error,
})

export const createPostAsync = (post) => (dispatch, getState) => {
  dispatch(createPostStart())
  showSpinner()
  postRequest(`/posts`, post)
    .then(() => {
      const { posts } = getState().posts
      dispatch(
        createPostSuccess({
          object: post,
          objects: posts,
        }),
      )
      hideSpinner()
    })
    .catch((err) => {
      dispatch(createPostFailure(err.message))
      hideSpinner()
    })
}

export const updatePostStart = () => ({
  type: PostsActionTypes.UPDATE_POST_START,
})

export const updatePostSuccess = (payload) => ({
  type: PostsActionTypes.UPDATE_POST_SUCCESS,
  payload,
})

export const updatePostFailure = (error) => ({
  type: PostsActionTypes.UPDATE_POST_FAILURE,
  payload: error,
})

export const updatePostAsync = (post) => (dispatch, getState) => {
  dispatch(updatePostStart())
  showSpinner()
  putRequest(`/posts/${post.id}`, post)
    .then(() => {
      dispatch(
        updatePostSuccess({
          object: post,
          objects: getState().posts.posts,
        }),
      )
      hideSpinner()
    })
    .catch((err) => {
      dispatch(updatePostFailure(err.message))
      hideSpinner()
    })
}

export const deletePostStart = () => ({
  type: PostsActionTypes.DELETE_POST_START,
})

export const deletePostSuccess = (payload) => ({
  type: PostsActionTypes.DELETE_POST_SUCCESS,
  payload,
})

export const deletePostFailure = (error) => ({
  type: PostsActionTypes.DELETE_POST_FAILURE,
  payload: error,
})

export const deletePostAsync = (postId) => (dispatch, getState) => {
  dispatch(deletePostStart())
  showSpinner()
  remove(`/posts/${postId}`)
    .then(() => {
      dispatch(
        deletePostSuccess({
          objectId: postId,
          objects: getState().posts.posts,
        }),
      )
      hideSpinner()
    })
    .catch((err) => {
      dispatch(deletePostFailure(err.message))
      hideSpinner()
    })
}
