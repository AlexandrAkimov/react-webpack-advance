import { addCommentFormActions, addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice'
import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import cls from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm: FC<AddCommentFormProps> = memo(({ className, onSendComment }) => {
  const { t } = useTranslation()
  const text = useSelector(getAddCommentFormText)
  const error = useSelector(getAddCommentFormError)
  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback((value) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onSendCommentHandler = useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])


  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          placeholder="Введите текст комментария"
          className={cls.input}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button
          theme={ThemeButton.OUTLINE}
          onClick={onSendCommentHandler}
        >
          Отправить
        </Button>
      </div>
    </DynamicModuleLoader>

  )
})

export default AddCommentForm
