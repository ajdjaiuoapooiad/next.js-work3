
import JobsList from '@/components/JobsList'
import Navbar from '@/components/Navbar'
import PostContainer from '@/components/PostContainer'
import SearchContainer from '@/components/SearchForm'
import Sidebar from '@/components/Sidebar'

import { QueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'

const Home = async () => {


  return (
    <div>
      
      <Navbar /> 


      <div className='grid grid-cols-4'>
        <div className='col-span-1'>
          <h1 className='bg-blue-500'>Left</h1>
          <SearchContainer />
        </div>

        <div className='col-span-3'>
          <h1 className='bg-red-500'>Right </h1>
          <JobsList />
        </div>
      </div>

    </div>


    

  )
}

export default Home