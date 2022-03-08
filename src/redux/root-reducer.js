import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import commentsReducer from './comments/comments.reducer'
import postsReducer from './posts/posts.reducer'

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: [],
}

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
})

export default persistReducer(rootPersistConfig, rootReducer)
