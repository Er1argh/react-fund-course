import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import { useFetching } from '../hooks/useFetching'

import PostService from '../API/PostService'

import Loader from '../components/UI/Loader/Loader'

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [redirect, setRedirect] = useState(false)

  const [fetchPostById, isLoading, error] = useFetching(async id => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })

  const [fetchComments, isComLoading, comError] = useFetching(async id => {
    const response = await PostService.getCommentsByPostId(id)
    setComments(response.data)
  })

  useEffect(() => {
    if (!/^\d+$/.test(params.id) || Number(params.id) < 1 || Number(params.id) > 100) setRedirect(true)
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])

  if (redirect) return <Navigate to="/posts" />

  return (
    <div>
      {error && <h1>Произошла ошибка {error}</h1>}
      <h1>Вы открыли страницу поста c ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      {comError && <h1>Произошла ошибка {comError}</h1>}
      <h1>Комментарии</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map(c => (
            <div key={c.id} style={{ marginTop: 15 }}>
              <h5>{c.email}</h5>
              <div>{c.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PostIdPage
