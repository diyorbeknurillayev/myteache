import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './Logo 1.png'
import { MdOutlineLanguage } from 'react-icons/md'
import { AiOutlineDown, AiOutlineBars } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'

const Header = ({ state, setState }) => {
  const [show, setShow] = useState(true)
  function show_2() {
    setShow(!show)
    setState(!state)
  }

  return (
    <header className={`${show ? 'blabla' : 'bla_2'} bg-white py-1 h-[76px] flex items-center z-[59] fixed w-full top-0`}>
      <div className="container flex items-center justify-between">
        <Link to='/'><img className='w-[170px]' src={logo} alt="logo" /></Link>

        <div className='flex items-center h-[72px]'>
          <ul className='md:flex hidden items-center h-[72px]'>
            <li className='mx-[18px] h-[72px] items-center flex'><Link className='text-[19px] flex items-center transition-all duration-[300ms] hover:text-[#A30041] border-top-a text-[#37363C] font-[500]' to='/'>Asosiy</Link></li>
            <li className='mx-[18px] h-[72px] items-center flex'><Link className='text-[19px] flex items-center transition-all duration-[300ms] hover:text-[#A30041] border-top-a text-[#37363C] font-[500]' to='/about'>Biz Haqimizda</Link></li>
            <li className='mx-[18px] h-[72px] items-center flex'><Link className='text-[19px] flex items-center transition-all duration-[300ms] hover:text-[#A30041] border-top-a text-[#37363C] font-[500]' to='/blog'>Blog</Link></li>
            <li className='mx-[18px] h-[72px] items-center flex'><Link className='text-[19px] flex items-center transition-all duration-[300ms] hover:text-[#A30041] border-top-a text-[#37363C] font-[500]' to='/comments'>Fikrlar</Link></li>
          </ul>
          <div className='hidden md:flex items-center'>
            <Link to='/'>
              <button className='hover:bg-white hover:text-[#A30041] hover:border-bla transition-all duration-[300ms] border-bla-2 mx-[18px] w-[150px] flex-row flex h-[42px] font-bold text-[17px] rounded-[4px] py-2 px-4 bg-[#A30041] text-white items-center justify-center'>Registratsiya</button>
            </Link>
            <Link to='/'>
              <button className='hover:bg-[#A30041] hover:text-white transition-all duration-[300ms] mx-[18px] w-[77px] h-[42px] text-[17px] font-bold rounded-[4px] border-bla'>Kirish</button>
            </Link>
          </div>
          <div className='md:flex hidden items-center mx-[18px] space-x-1 cursor-pointer'>
            <MdOutlineLanguage className='text-[28px] text-[#a30041]' />
            <p className='text-[18px]'>O'zbekcha</p>
            <AiOutlineDown className='text-[21px] text-[#a30041]' />
          </div>
          <div className='inline-block md:hidden cursor-pointer'>
            <AiOutlineBars onClick={show_2} className='text-[30px] cursor-pointer' />
          </div>
        </div>
      </div>
      <div className={`${show ? 'div-header' : 'header-div'} transition-all duration-300 left-0 top-0 absolute w-[280px] h-[100vh] bg-[#A30041] z-[70]`}>
        <div className='flex items-center justify-between w-full bg-white px-4 py-3 top-0 left-0'>
          <img src={logo} className='w-[150px]' alt="" />
          <FaTimes className='text-[22px] text-[#A30041] cursor-pointer' onClick={show_2} />
        </div>
        <div className="py-3 px-4">
          <ul>
            <li className='border-b border-[#ece4e58f] items-center flex'><Link className='px-3 py-2 text-[19px] flex items-center transition-all duration-[300ms] hover:tetx-[#37363c] text-[#fff] font-[500]' to='/'>Asosiy</Link></li>
            <li className='border-b border-[#ece4e58f] items-center flex'><Link className='px-3 py-2 text-[19px] flex items-center transition-all duration-[300ms] hover:tetx-[#37363c] text-[#fff] font-[500]' to='/blog'>Blog</Link></li>
            <li className='border-b border-[#ece4e58f] items-center flex'><Link className='px-3 py-2 text-[19px] flex items-center transition-all duration-[300ms] hover:tetx-[#37363c] text-[#fff] font-[500]' to='/comments'>Fikrlar</Link></li>
            <li className='border-b border-[#ece4e58f] items-center flex'><Link className='px-3 py-2 text-[19px] flex items-center transition-all duration-[300ms] hover:tetx-[#37363c] text-[#fff] font-[500]' to='/comments'>Registratsiya</Link></li>
            <li className='border-b border-[#ece4e58f] items-center flex'><Link className='px-3 py-2 text-[19px] flex items-center transition-all duration-[300ms] hover:tetx-[#37363c] text-[#fff] font-[500]' to='/comments'>Kirish</Link></li>
          </ul>
          <div className='flex items-center space-x-1 cursor-pointer'>
            <MdOutlineLanguage className='text-[28px] text-[#fff]' />
            <p className='text-[18px] text-white'>O'zbekcha</p>
            <AiOutlineDown className='text-[21px] text-[#fff]' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header