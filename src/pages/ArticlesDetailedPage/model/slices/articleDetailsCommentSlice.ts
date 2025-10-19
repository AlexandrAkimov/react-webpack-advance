import {
  createEntityAdapter,
  createSlice,
  configureStore,
  PayloadAction,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'

const commentsAdapter = createEntityAdapter<Comment>({
  // Assume IDs are stored in a field other than `comment.id`
  selectId: (comment: Comment) => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
)

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      }).addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.isLoading = false
          commentsAdapter.setAll(state, action.payload)
        },
      ).addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice

// type RootState = ReturnType<typeof store.getState>

// console.log(store.getState().books)
// // { ids: [], entities: {} }

// // Can create a set of memoized selectors based on the location of this entity state
// const booksSelectors = booksAdapter.getSelectors<RootState>(
//   (state) => state.books,
// )

// // And then use the selectors to retrieve values
// const allBooks = booksSelectors.selectAll(store.getState())
