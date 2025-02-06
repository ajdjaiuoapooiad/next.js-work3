import { Post } from '@/app/types/type'
import { JobType } from '@/utils/types'
import React from 'react'




// interface CardProps {
//   post: Post 
// }


const JobCard = ({job}: {job: JobType}) => {
  const {id, title, category, income} = job

  return (
    <div key={id} className='border p-5 my-5'>
      <h2>{title}</h2>
      <p>Category: {category}</p>
      <p>Income: ${income}</p>
    </div>
  )
}

export default JobCard