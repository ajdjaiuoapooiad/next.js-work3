import { Post } from '@/app/types/type'
import React from 'react'

interface CardListProps {
  posts: Post[] 
}

const JobsList = ({posts}: {posts: CardListProps}) => {



  return (
    <div>
      {posts.map((post: Post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>Category: {post.category}</p>
            <p>Income: ${post.income}</p>
          </div>
        )
      })}
    </div>
  )
}

export default JobsList