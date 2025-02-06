'use client'
import { Post } from '@/app/types/type'
import React from 'react'
import JobCard from './JobCard'
import { useSearchParams } from 'next/navigation'
import { useQuery } from "@tanstack/react-query"
import { getAllJobsAction } from '@/utils/actions'

// interface CardListProps {
//   posts: Post[] 
// }

const JobsList = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || '';
  const jobStatus = searchParams.get('jobStatus') || 'all';

  const {data, isPending} = useQuery({
    queryKey: ['' ,search ?? '', jobStatus ],
    queryFn: () => getAllJobsAction({search, jobStatus}),
  })
  const jobs = data?.jobs || [];

  if(isPending) return <div>Loading...</div>;
  if(jobs.length < 1) return <div>No jobs found.</div>;


  return (
    <div className='container '>
      {jobs.map((job) => {
        return (
          <JobCard key={job.id} job={job} />
        )
      })}
    </div>
  )
}

export default JobsList