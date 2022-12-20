import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Logo 1.png'
import { MdOutlineLanguage } from 'react-icons/md'
import { AiOutlineDown } from 'react-icons/ai'

const Header = () => {
  return (
    <header className='py-2 z-50 fixed w-full top-0'>
      <div className="container flex items-center justify-between">
        <Link to='/'><img className='w-[185px] h-[56px]' src={logo} alt="logo" /></Link>

        <div className='flex items-center h-[72px]'>
          <ul className='flex items-center h-[72px]'>
            <li className='mx-[18px] h-[72px] items-center flex'><Link className='text-[19px] flex items-center transition-all duration-[300ms] hover:text-[#A30041] border-top-a text-[#37363C] font-[500]' to='/'>Asosiy</Link></li>
            <li className='mx-[18px] h-[72px] items-center flex'><Link className='text-[19px] flex items-center transition-all duration-[300ms] hover:text-[#A30041] border-top-a text-[#37363C] font-[500]' to='/about'>Biz Haqimizda</Link></li>
            <li className='mx-[18px] h-[72px] items-center flex'><Link className='text-[19px] flex items-center transition-all duration-[300ms] hover:text-[#A30041] border-top-a text-[#37363C] font-[500]' to='/blog'>Blog</Link></li>
            <li className='mx-[18px] h-[72px] items-center flex'><Link className='text-[19px] flex items-center transition-all duration-[300ms] hover:text-[#A30041] border-top-a text-[#37363C] font-[500]' to='/'>Fikrlar</Link></li>
          </ul>
          <div className='flex items-center'>
            <Link to='/'>
              <button className='hover:bg-white hover:text-[#A30041] hover:border-bla transition-all duration-[300ms] border-bla-2 mx-[18px] w-[150px] flex-row flex h-[42px] font-bold text-[17px] rounded-[4px] py-2 px-4 bg-[#A30041] text-white items-center justify-center'>Registratsiya</button>
            </Link>
            <Link to='/'>
              <button className='hover:bg-[#A30041] hover:text-white transition-all duration-[300ms] mx-[18px] w-[77px] h-[42px] text-[17px] font-bold rounded-[4px] border-bla'>Kirish</button>
            </Link>
          </div>
          <div className='flex items-center mx-[18px] space-x-1 cursor-pointer'>
            <MdOutlineLanguage className='text-[28px] text-[#a30041]' />
            <p className='text-[18px]'>O'zbekcha</p>
            <AiOutlineDown className='text-[21px] text-[#a30041]' />
          </div>  
        </div>
      </div>
    </header>
  )
}

export default Header