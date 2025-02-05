import { Post } from '@/app/types/type'
import React from 'react'
import JobCard from './JobCard'

interface CardListProps {
  posts: Post[] 
}

const JobsList = ({posts}: CardListProps) => {



  return (
    <div className='container '>
      {posts.map((post: Post) => {
        return (
          <JobCard post={post} />
        )
      })}
    </div>
  )
}

export default JobsList