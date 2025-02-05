import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-blue-500 mb-5'>
      <nav className='flex justify-between mx-auto container items-center p-3'>
       
            <div className='text-3xl '>
              <a href="/" className='hover:text-blue-100 transition-all duration-300'>求人検索アプリ</a>
            </div>

    
            <div className='space-x-12 font-bold'>
              <a href="/" className='hover:text-blue-100 transition-all duration-300'>ホーム</a>
              <a href="/create-post" className='hover:text-blue-100 transition-all duration-300'>Create</a>
              <a href="/" className='hover:text-blue-100 transition-all duration-300'>問い合わせ</a>
            </div>
  
    
      </nav>
    </div>
  )
}

export default Navbar