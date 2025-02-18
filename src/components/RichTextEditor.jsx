
import { useState } from 'react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'

const RichTextEditor = () => {

  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  return (
    <Editor className='w-full h-full border-2'
      editorState={editorState}
      onEditorStateChange={setEditorState}
      wrapperClassName="demo-wrapper"
      editorClassName="demo-editor"
    />
  )
}

export default RichTextEditor
