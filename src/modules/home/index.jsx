import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import { DataGrid } from '@mui/x-data-grid'
import { Container, Button, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Add } from '@material-ui/icons'

import {
  createPostAsync,
  deletePostAsync,
  getPostsAsync,
  updatePostAsync,
} from '../../redux/posts/posts.actions'
import { selectBlogPosts } from '../../redux/posts/posts.selectors'

import './index.scss'
/**
 * Home a functional component view posts and the actions that could done on it
 * @date 2022-03-08
 * @param {func} getPostsAsyncProp
 * @param {array} posts
 * @param {func} createPostAsyncProp
 * @param {func} updatePostAsyncProp
 * @param {func} deletePostAsyncProp
 * @returns {JSX}
 */
const Home = ({
  getPostsAsyncProp,
  posts,
  createPostAsyncProp,
  updatePostAsyncProp,
  deletePostAsyncProp,
}) => {
  const { t } = useTranslation()
  const history = useHistory()
  const [selectedPost, setSelectedPost] = useState(null)
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [createPostFlag, setCreatePostFlag] = useState(false)
  const columns = [
    { field: 'id', headerName: t('POSTS.ID'), width: 90 },
    {
      field: 'title',
      headerName: t('POSTS.TITLE'),
      width: 300,
    },
    {
      field: 'body',
      headerName: t('POSTS.BODY'),
      width: 300,
    },
  ]

  useEffect(() => {
    getPostsAsyncProp()
  }, [])

  const handleOnCellClick = (data) => {
    setSelectedPost(data)
    setPostTitle(data.title)
    setPostBody(data.body)
    setCreatePostFlag(false)
  }

  const handleFieldChange = (event) => {
    if (!event || !event.target.value) return
    switch (event.target.name) {
      case 'title':
        setPostTitle(event.target.value)
        break
      case 'body':
        setPostBody(event.target.value)
        break
      default:
        break
    }
  }

  const initCreatePost = () => {
    setPostTitle('')
    setPostBody('')
    setCreatePostFlag(true)
  }

  const resetState = () => {
    setSelectedPost(null)
    setPostTitle(null)
    setPostBody(null)
    setCreatePostFlag(false)
  }

  const viewPostDetails = () => {
    if (selectedPost) {
      history.push(`/post/${selectedPost.id}`)
    }
  }

  const addPost = () => {
    const lastId = posts && posts.length > 0 ? posts[posts.length - 1].id : 0
    const postObj = {
      body: postBody,
      title: postTitle,
      userId: 1,
      id: lastId + 1,
    }
    createPostAsyncProp(postObj)
    resetState()
  }

  const deletePost = () => {
    deletePostAsyncProp(selectedPost.id)
    resetState()
  }

  const editPost = () => {
    const postObj = {
      body: postBody,
      title: postTitle,
      userId: selectedPost.userId,
      id: selectedPost.id,
    }
    updatePostAsyncProp(postObj)
    resetState()
  }

  return (
    <Container className="posts-container" maxWidth="md">
      <div className="data-grid">
        {posts && posts.length > 0 && (
          <DataGrid
            rows={posts}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            autoHeight
            onRowClick={(params) => handleOnCellClick(params.row)}
          />
        )}
      </div>
      <div className="post">
        <div className="post__actions">
          <Button
            onClick={initCreatePost}
            variant="contained"
            color="primary"
            startIcon={<Add />}
          >
            {t('POSTS.ADD_POST')}
          </Button>
          {selectedPost && (
            <Button onClick={deletePost} variant="contained" color="secondary">
              {t('POSTS.DELETE_POST')}
            </Button>
          )}
          {selectedPost && (
            <Button
              onClick={viewPostDetails}
              variant="contained"
              color="primary"
            >
              {t('POSTS.VIEW_DETAILS')}
            </Button>
          )}
        </div>
        {(selectedPost || createPostFlag) && (
          <div className="post__form">
            <div className="post__form-fields">
              <TextField
                id="title"
                name="title"
                label={t('POSTS.TITLE')}
                value={postTitle}
                onChange={handleFieldChange}
                className="post__form-field"
              />
              <TextField
                id="body"
                name="body"
                label={t('POSTS.BODY')}
                value={postBody}
                multiline
                maxRows={5}
                onChange={handleFieldChange}
                className="post__form-field"
              />
            </div>
            <div className="post__form-actions">
              {!createPostFlag && (
                <Button
                  onClick={editPost}
                  variant="contained"
                  color="primary"
                  className="post__form-action"
                >
                  {t('POSTS.EDIT_POST')}
                </Button>
              )}
              {createPostFlag && (
                <Button
                  onClick={addPost}
                  variant="contained"
                  color="primary"
                  className="post__form-action"
                >
                  {t('POSTS.ADD_POST')}
                </Button>
              )}
              <Button
                onClick={resetState}
                variant="contained"
                color="secondary"
                className="post__form-action"
              >
                {t('POST.CANCEL')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}

Home.propTypes = {
  getPostsAsyncProp: PropTypes.func,
  posts: PropTypes.array,
  createPostAsyncProp: PropTypes.func,
  updatePostAsyncProp: PropTypes.func,
  deletePostAsyncProp: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  posts: selectBlogPosts,
})

const mapDispatchToProps = (dispatch) => ({
  getPostsAsyncProp: () => dispatch(getPostsAsync()),
  createPostAsyncProp: (post) => dispatch(createPostAsync(post)),
  updatePostAsyncProp: (post) => dispatch(updatePostAsync(post)),
  deletePostAsyncProp: (postId) => dispatch(deletePostAsync(postId)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
