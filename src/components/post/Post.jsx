import React from 'react';
import './Post.css';

function Post({ post, onDelete }) {
  return (
    <div className='post'>
        <h1>{ post?.id }</h1>
        <h2>{ post?.title }</h2>
        <p>{ post?.body }</p>
        <button onClick={() => onDelete(post.id)}>Delete</button>
    </div>
  )
}

export default Post