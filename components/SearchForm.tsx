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



const SearchForm = () => {
  return (
    <div>
      <form action="">
        <Input type="text" placeholder="Search..."  name='search' />

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