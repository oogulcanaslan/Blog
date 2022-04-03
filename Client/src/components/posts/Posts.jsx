import React from 'react'
import Post from '../post/Post';
import "./posts.css";

const Posts = ({posts}) => {
  return (
    <div className="posts">
    {posts.map((p,index) => (
      <Post post={p} key={index}/>
    ))}
  </div>
  )
}

export default Posts