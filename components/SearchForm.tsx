'use client'

import React from 'react'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from './ui/button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { JobStatus } from '@/utils/types'



const SearchForm = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || '';
  const jobStatus = searchParams.get('jobStatus') || 'all';

  const router = useRouter()
  const pathNama = usePathname();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let params = new URLSearchParams()


    const formData = new FormData(e.currentTarget)
    const search = formData.get('search') as string
    const jobStatus = formData.get('jobStatus') as string
    params.set('search', search)
    params.set('jobStatus', jobStatus)

    router.push(`${pathNama}?${params.toString()}`)
  }








  return (
    <div className='mx-10 '>

      <h1 className='bg-green-500'>Left</h1>
      <div className='text-2xl font-bold'>検索カテゴリ</div>


      <form action="" onSubmit={handleSubmit} className='py-3'>
        <Input className='my-5 bg-gray-100' type="text" placeholder="Search..."  name='search' defaultValue={search} />

        <Select   name='jobStatus' defaultValue={jobStatus} >
          <SelectTrigger className="w-[180px] my-5 bg-gray-100">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent >

            {['all', ...Object.values(JobStatus)].map((jobStatus) => {
              return (

                <SelectItem value={jobStatus} key={jobStatus} >{jobStatus}</SelectItem>
              )
            })}
            
          </SelectContent>
        </Select>

        <Button type='submit'>検索</Button>
      </form>
    </div>
  )
}

export default SearchForm