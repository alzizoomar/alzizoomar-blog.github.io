import { createSelector } from 'reselect'

const selectComments = (state) => state.comments

export const selectPostComments = createSelector(
  [selectComments],
  (comments) => comments.commentsArr,
)

export const selectCommentsError = createSelector(
  [selectComments],
  (comments) => comments.getPostsError,
)
