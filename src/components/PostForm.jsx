import React, { useState } from 'react'

import Input from './UI/Input/Input'
import Button from './UI/Button/Button'

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = event => {
    event.preventDefault()
    const newPost = {
      ...post,
      id: Date.now(),
    }
    create(newPost)
    setPost({ title: '', body: '' })
  }

  return (
    <form>
      <Input
        type="text"
        placeholder="Описание поста"
        value={post.title}
        onChange={event => setPost({ ...post, title: event.target.value })}></Input>
      <Input
        value={post.body}
        placeholder="Название поста"
        onChange={event => setPost({ ...post, body: event.target.value })}
        type="text"></Input>
      <Button onClick={addNewPost}>Создать пост</Button>
    </form>
  )
}

export default PostForm
