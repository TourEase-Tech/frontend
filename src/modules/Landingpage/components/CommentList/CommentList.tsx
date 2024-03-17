import { Avatar } from '@mui/material'
import { EditorState, convertFromHTML, ContentState } from 'draft-js'
import { useContext, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import Button from 'src/modules/Share/components/Button'
import { AppContext } from 'src/modules/Share/contexts'
import { useQueryParams } from 'src/modules/Share/hooks'
import { GetProfileQuery } from 'src/modules/Share/services'
import { formatDateTimeVN } from 'src/modules/Share/utils'
import {
  CreateCommentCommandHandler,
  EditCommentCommandHandler,
  getAllCommentCommandHandler
} from 'src/modules/TourManagement/services'
import Parser from 'html-react-parser'

const CommentList = () => {
  const { isAuthenticated } = useContext(AppContext)
  const getProfileQuery = new GetProfileQuery(isAuthenticated)
  const profile = getProfileQuery.fetch()?.data

  const queryTourConfig = useQueryParams()

  const getAllCommentsQuery = new getAllCommentCommandHandler(queryTourConfig.id as string)
  const comments = getAllCommentsQuery.fetch()

  const [comment, setComment] = useState<EditorState>(EditorState.createEmpty())
  const [isEditComment, setIsEditComment] = useState<boolean>(false)
  const [editCommentId, setEditCommentId] = useState<string>('')
  const onEditorStateChange = (editorState: EditorState) => {
    setComment(editorState)
  }

  const onEditComment = (content: string, commentId: string) => {
    setIsEditComment(true)
    setEditCommentId(commentId)
    const blocksFromHTML = convertFromHTML(content)
    const state = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap)
    setComment(EditorState.createWithContent(state))
  }

  const stringToColor = (string: string) => {
    let hash = 0
    let i

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }

    let color = '#'

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff
      color += `00${value.toString(16)}`.slice(-2)
    }

    return color
  }

  const stringAvatar = (name: string) => {
    return {
      sx: {
        bgcolor: stringToColor(name)
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[0]}`
    }
  }

  const createCommentCommandHandle = new CreateCommentCommandHandler()
  const editCommentCommandHandle = new EditCommentCommandHandler()

  const handleCancelEdit = () => {
    setIsEditComment(false)
    setComment(EditorState.createEmpty())
  }

  const handleSubmitForm = () => {
    const content = comment.getCurrentContent().getPlainText('\u0001')

    if (isEditComment) {
      editCommentCommandHandle.handle(
        {
          commentId: editCommentId,
          content: content
        },
        () => {
          setIsEditComment(false)
          setComment(EditorState.createEmpty())
        },
        () => {}
      )
    } else {
      createCommentCommandHandle.handle(
        {
          tour: queryTourConfig.id as string,
          content: content
        },
        () => {
          setComment(EditorState.createEmpty())
        },
        () => {}
      )
    }
  }

  return (
    <section className='px-6'>
      {comments && (
        <div className=''>
          <h2 className='font-semibold  text-[#172B4D]'>
            Comments <span>{`(${comments?.length})`}</span>
          </h2>
          <ol className='mt-4'>
            {comments.map((comment, index) => (
              <li key={index} className='flex items-start gap-2'>
                <Avatar {...stringAvatar(`${comment.user.firstname}`)} />
                <div className='flex flex-col text-[14px]'>
                  <span className='font-medium text-black'>
                    {comment.user.firstname} {comment.user.lastname}
                  </span>
                  <span>{Parser(comment.content)}</span>
                  <ul className='text-[10px] list-none'>
                    <li className='float-left'>{formatDateTimeVN(comment.createdAt)}</li>
                    {comment.user._id == profile._id && (
                      <li className='float-left px-2'>
                        <Button onClick={() => onEditComment(comment.content, comment._id)}>Edit</Button>
                      </li>
                    )}
                  </ul>
                </div>
              </li>
            ))}
            <li className='pt-5 '>
              <div className='border-[1px] border-[#C8C8C8] rounded-lg overflow-hidden'>
                <Editor
                  editorState={comment}
                  onEditorStateChange={onEditorStateChange}
                  toolbarClassName='toolbarClassName'
                  wrapperClassName='wrapperClassName'
                  editorClassName='editorClassName'
                  placeholder='What do you want to say ?'
                />
              </div>
            </li>
            <div className='flex justify-end gap-4 mt-2'>
              {isEditComment && (
                <Button
                  type='button'
                  classNameButton='bg-gray-300 py-2 px-6 rounded-xl text-[14px] text-white font-semibold mt-2'
                  onClick={handleCancelEdit}
                >
                  Cancel
                </Button>
              )}
              <Button
                type='button'
                classNameButton='bg-[#26da38] py-2 px-6 rounded-xl text-[14px] text-white font-semibold mt-2'
                onClick={handleSubmitForm}
                isLoading={
                  isEditComment ? editCommentCommandHandle.isLoading() : createCommentCommandHandle.isLoading()
                }
              >
                {isEditComment ? 'Save' : 'Submit'}
              </Button>
            </div>
          </ol>
        </div>
      )}
    </section>
  )
}

export default CommentList
