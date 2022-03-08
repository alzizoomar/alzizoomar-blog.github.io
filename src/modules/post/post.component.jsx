import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Avatar,
  IconButton,
  TextField,
  Button,
} from '@material-ui/core'
import { deepOrange } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import { ExpandMore, Edit, Delete, Add } from '@material-ui/icons'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { getPostAsync } from '../../redux/posts/posts.actions'
import { selectPost } from '../../redux/posts/posts.selectors'
import {
  createCommentAsync,
  deleteCommentAsync,
  getCommentsAsync,
  updateCommentAsync,
} from '../../redux/comments/comments.actions'
import { selectPostComments } from '../../redux/comments/comments.selectors'

import './post.styles.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: '1.4rem',
    fontWeight: theme.typography.fontWeightRegular,
  },
  details: {
    flexDirection: 'column',
    fontSize: '1.4rem',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    margin: '0 1rem',
  },
}))
/**
 * Post Functional Component to view post and comments and edit them
 * @date 2022-03-07
 *
 * @param {func} getPostAsyncProp function to get post
 * @param {object} post post object
 * @param {func} getCommentsAsyncProp function to get comments
 * @param {object} comments comments object
 * @param {func} deleteCommentAsyncProp function to delete comment
 * @param {func} updateCommentAsyncProp function to update comment
 * @param {func} createCommentAsyncProp function to create comment
 *
 * @returns {JSX}
 */
const Post = ({
  getPostAsyncProp,
  post,
  getCommentsAsyncProp,
  comments,
  deleteCommentAsyncProp,
  updateCommentAsyncProp,
  createCommentAsyncProp,
}) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const { id } = useParams()
  const [editCommentId, setEditCommentId] = useState(null)
  const [commentName, setCommentName] = useState(null)
  const [commentEmail, setCommentEmail] = useState(null)
  const [commentBody, setCommentBody] = useState(null)

  useEffect(() => {
    if (id) {
      getPostAsyncProp(id)
      getCommentsAsyncProp(id)
    }
  }, [id])

  /**
   * getNameLetters Function get the first two letters of the string and upperCase them
   * @date 2022-03-07
   *
   * @param {string} name
   *
   * @returns {string}
   */
  const getNameLetters = (name) =>
    name
      .split(' ', 2)
      .map((item) => item.charAt(0))
      .join('')
      .toUpperCase()

  /**
   * editComment function
   * @date 2022-03-07
   * @param {object} comment comment to be edited
   * @returns {}
   */
  const initCommentEdit = (comment) => {
    setEditCommentId(comment.id)
    setCommentName(comment.name)
    setCommentEmail(comment.email)
    setCommentBody(comment.body)
  }

  const handleFieldChange = (event) => {
    if (!event || !event.target.value) return
    switch (event.target.name) {
      case 'name':
        setCommentName(event.target.value)
        break
      case 'email':
        setCommentEmail(event.target.value)
        break
      case 'body':
        setCommentBody(event.target.value)
        break
      default:
        break
    }
  }

  const editComment = (comment) => {
    const commentObj = {
      body: commentBody,
      email: commentEmail,
      id: comment.id,
      name: commentName,
      postId: comment.postId,
    }
    updateCommentAsyncProp(commentObj)
    resetState()
  }

  const initCreateComment = () => {
    setEditCommentId('new')
    setCommentName('')
    setCommentEmail('')
    setCommentBody('')
  }

  const createComment = () => {
    const commentObj = {
      body: commentBody,
      email: commentEmail,
      name: commentName,
      postId: Number(id),
    }
    createCommentAsyncProp(commentObj)
    resetState()
  }

  const resetState = () => {
    setEditCommentId(null)
    setCommentName(null)
    setCommentEmail(null)
    setCommentBody(null)
  }

  /**
   * deleteComment function
   * @date 2022-03-07
   * @param {string} commentId the commentId to be deleted
   * @returns {}
   */
  const deleteComment = (commentId) => {
    deleteCommentAsyncProp(commentId)
  }
  return (
    <div>
      {post && (
        <Container className="post-container" maxWidth="md">
          <div className="u-margin-bottom-medium">
            <h3 className="u-font-size-16 u-font-weight-bold u-color-title">
              {post.title}
            </h3>
            <div className="u-font-size-14  u-color-body">{post.body}</div>
          </div>
          <div className={classes.root}>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  {t('POST.COMMENTS')}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.details}>
                {comments &&
                  comments.length > 0 &&
                  comments.map((comment) => (
                    <div key={comment.id} className="comment-card__details">
                      <Avatar className={classes.orange}>
                        {getNameLetters(comment.name)}
                      </Avatar>

                      {editCommentId !== comment.id && (
                        <div className="comment-card__info">
                          <h3 className="comment-card__name u-font-size-16 u-font-weight-bold u-color-title">
                            {comment.name}
                          </h3>
                          <h5 className="comment-card__name u-font-size-12 u-font-weight-bold u-color-primary">
                            {comment.email}
                          </h5>
                          <div className="comment-card__body">
                            {comment.body}
                          </div>
                        </div>
                      )}
                      {!editCommentId && editCommentId !== 'new' && (
                        <div className="comment-card__action">
                          <IconButton
                            onClick={() => initCommentEdit(comment)}
                            color="primary"
                            component="span"
                          >
                            <Edit />
                          </IconButton>
                          <IconButton
                            onClick={() => deleteComment(comment.id)}
                            color="secondary"
                            component="span"
                          >
                            <Delete />
                          </IconButton>
                        </div>
                      )}
                      {editCommentId === comment.id && (
                        <div className="comment-card__form">
                          <div className="comment-card__form-fields">
                            <TextField
                              id="name"
                              name="name"
                              label={t('POST.NAME')}
                              value={commentName}
                              onChange={handleFieldChange}
                            />
                            <TextField
                              id="email"
                              name="email"
                              label={t('POST.EMAIL')}
                              value={commentEmail}
                              onChange={handleFieldChange}
                            />
                            <TextField
                              id="body"
                              name="body"
                              label={t('POST.BODY')}
                              value={commentBody}
                              multiline
                              maxRows={5}
                              onChange={handleFieldChange}
                            />
                          </div>
                          <div className="comment-card__form-actions">
                            <Button
                              onClick={() => editComment(comment)}
                              variant="contained"
                              color="primary"
                              className="comment-card__form-action"
                            >
                              {t('POST.EDIT_COMMENT')}
                            </Button>
                            <Button
                              onClick={resetState}
                              variant="contained"
                              color="secondary"
                              className="comment-card__form-action"
                            >
                              {t('POST.CANCEL')}
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                {editCommentId === 'new' && (
                  <div className="comment-card__form">
                    <div className="comment-card__form-fields">
                      <TextField
                        id="name"
                        name="name"
                        label={t('POST.NAME')}
                        value={commentName}
                        onChange={handleFieldChange}
                      />
                      <TextField
                        id="email"
                        name="email"
                        label={t('POST.EMAIL')}
                        value={commentEmail}
                        onChange={handleFieldChange}
                      />
                      <TextField
                        id="body"
                        name="body"
                        label={t('POST.BODY')}
                        value={commentBody}
                        multiline
                        maxRows={5}
                        onChange={handleFieldChange}
                      />
                    </div>
                    <div className="comment-card__form-actions">
                      <Button
                        onClick={createComment}
                        variant="contained"
                        color="primary"
                        className="comment-card__form-action"
                      >
                        {t('POST.SAVE_COMMENT')}
                      </Button>
                      <Button
                        onClick={resetState}
                        variant="contained"
                        color="secondary"
                        className="comment-card__form-action"
                      >
                        {t('POST.CANCEL')}
                      </Button>
                    </div>
                  </div>
                )}
                {!editCommentId && (
                  <Button
                    onClick={initCreateComment}
                    variant="contained"
                    color="primary"
                    startIcon={<Add />}
                  >
                    {t('POST.ADD_COMMENT')}
                  </Button>
                )}
              </AccordionDetails>
            </Accordion>
          </div>
        </Container>
      )}
    </div>
  )
}

Post.propTypes = {
  getPostAsyncProp: PropTypes.func,
  post: PropTypes.object,
  getCommentsAsyncProp: PropTypes.func,
  comments: PropTypes.array,
  deleteCommentAsyncProp: PropTypes.func,
  updateCommentAsyncProp: PropTypes.func,
  createCommentAsyncProp: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  post: selectPost,
  comments: selectPostComments,
})

const mapDispatchToProps = (dispatch) => ({
  getPostAsyncProp: (id) => dispatch(getPostAsync(id)),
  getCommentsAsyncProp: (id) => dispatch(getCommentsAsync(id)),
  deleteCommentAsyncProp: (id) => dispatch(deleteCommentAsync(id)),
  updateCommentAsyncProp: (comment) => dispatch(updateCommentAsync(comment)),
  createCommentAsyncProp: (comment) => dispatch(createCommentAsync(comment)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Post)
