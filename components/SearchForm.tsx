'use client'

import { SelectContent, SelectTrigger, SelectValue } from "@radix-ui/react-select"
import { Input } from "./ui/input"
import { Select, SelectItem } from "./ui/select"
import { JobStatus } from "@/utils/types"
import { Button } from "./ui/button"
import { usePathname, useRouter, useSearchParams } from "next/navigation"


const SearchContainer = () => {
  const serchParams = useSearchParams()
  const search = serchParams.get('search') || ''
  const jobStatus = serchParams.get('jobStatus') || 'all';

  const router = useRouter
  const pathName = usePathname()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let params = new URLSearchParams()

    const formData =new FormData(e.currentTarget)
    const search = formData.get('search') as string 
    const jobStatus = formData.get('status') as string
    params.set('search', search)
    params.set('jobStatus', jobStatus)

    router.push(`${pathName}?${params.toString()}`);
  }


  return (
    <div className="bg-muted">
      <form action="" >

      <Input type="text" placeholder="Search title" name="search" defaultValue={search} className="form-control m-5" />

   
      <Select  defaultValue={jobStatus} name='jobStatus'  >
        <SelectTrigger  className="px-5 m-5 ">
          <SelectValue />
        </SelectTrigger>

        <SelectContent >
          {['all', ...Object.values(JobStatus)].map((jobStatus) => {
            return (
              <SelectItem key={jobStatus} value={jobStatus} >
                {jobStatus}
              </SelectItem>
            )
          } )}
        </SelectContent>
      </Select>
     

      <Button className="px-5 m-5" type="submit">検索</Button>

      </form>
    </div>
    
  )
}

export default SearchContainer