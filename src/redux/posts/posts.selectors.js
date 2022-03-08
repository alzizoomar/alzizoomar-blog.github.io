import { createSelector } from 'reselect'

const selectPosts = (state) => state.posts

export const selectBlogPosts = createSelector(
  [selectPosts],
  (posts) => posts.posts,
)

export const selectPostsError = createSelector(
  [selectPosts],
  (posts) => posts.getPostsError,
)

export const selectPost = createSelector([selectPosts], (posts) => posts.post)

export const selectPostError = createSelector(
  [selectPosts],
  (posts) => posts.getPostError,
)
