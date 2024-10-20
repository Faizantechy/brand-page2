import React from 'react'

const Header = () => {
  return (
    <div className='p-8'>

        <header className='w-full px-5 py-5  flex justify-between items-center'>

        <img src="https://pngimg.com/d/nike_PNG6.png" alt="" className='w-[80px]'/>

        <div className=' hidden  gap-5 font-bold text-xl  lg:flex '>
  <a href="#">Menu</a>
  <a href="#">Location</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</div>

        <i class="ri-menu-line text-3xl font-extrabold"></i>


        <button className='bg-red-500 px-5 py-2 rounded-lg text-white font-bold'>Login</button>



        </header>



    </div>
  )
}

export default Header