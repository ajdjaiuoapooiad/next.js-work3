import prisma from '@/utils/db'
import React from 'react'

const JobsList = () => {

  const jobs = prisma.job.findMany()
  return (
    <div>
      
      <div>
        {}
      </div>
    </div>
  )
}

export default JobsList