import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails'
import { Comment } from 'entities/Comment'
import { getUserAuthData } from 'entities/User'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  'articleDetails/addCommentForArticle',
  async (text, thunkApi) => {
    const {
      extra, dispatch, rejectWithValue, getState,
    } = thunkApi

    const userData = getUserAuthData(getState())
    const articleDetails = getArticleDetailsData(getState())

    if (!userData || !text || !articleDetails) {
      return rejectWithValue('no data')
    }
    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: articleDetails.id,
        userId: userData.id,
        text,
      })

      if (!response.data) {
        throw new Error()
      }

      dispatch(fetchCommentsByArticleId(articleDetails.id))

      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  },
)
