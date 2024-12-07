import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from './UI/Button/Button'

const PostItem = props => {
  const navigate = useNavigate()

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <Button onClick={() => navigate(`/posts/${props.post.id}`, { replace: true })}>Открыть</Button>
        <Button onClick={() => props.remove(props.post)}>Удалить</Button>
      </div>
    </div>
  )
}

export default PostItem
