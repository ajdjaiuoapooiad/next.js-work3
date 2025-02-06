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
    <div>
      <form action="" onSubmit={handleSubmit}>
        <Input type="text" placeholder="Search..."  name='search' defaultValue={search} />

        <Select name='jobStatus'>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

        <Button type='submit'>検索</Button>
      </form>
    </div>
  )
}

export default SearchForm