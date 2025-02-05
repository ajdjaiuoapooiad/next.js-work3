
import JobsList from '@/components/JobsList'
import React from 'react'
import { Post } from './types/type'
import SearchForm from '@/components/SearchForm'




export async function getData() {
  const res = await fetch('http://localhost:3000/api/v1', {
    cache: 'no-store',
  })
  const data: Post[] = await res.json()
  console.log(data);
  return data;
}

const Home = async () => {  
  const posts = await getData();


  return (
    <div>

      <div className='grid grid-cols-4'>
        <div className='col-span-1'>
          <h1 className='bg-green-500'>Left</h1>
          <div className='text-2xl'>検索カテゴリ</div>
          <SearchForm />
        </div>

        <div className='col-span-3 '>
          <h1 className='bg-red-500'>Right </h1>
          <div className='text-3xl'>検索結果: 10件</div>
          
          <div className='mx-12'>
            <JobsList posts={posts} />
          </div>
            
        </div>
      </div>

    </div>


    

  )
}

export default Home