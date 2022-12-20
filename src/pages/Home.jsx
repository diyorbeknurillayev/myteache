import React from 'react'
import { AiOutlineSearch, AiTwotoneExperiment } from 'react-icons/ai'
import { IoLanguageSharp } from 'react-icons/io5'
import { FaDraftingCompass } from 'react-icons/fa'
import { MdOutlineComputer } from 'react-icons/md'
import { GiSecretBook } from 'react-icons/gi'

const Home = () => {
  return (
    <>
      <section className='section_1 flex items-center justify-center w-full h-[80vh]'>
        <div className="container flex justify-center">
          <div>
            <div className='flex ml-[30px] flex-col justify-center mb-[104px]'>
              <h2 className='text-[42px] mb-1 tracking-[1px] text-white font-[500] font-sans'>Saralangan o'qituvchilar online bazasi</h2>
              <div className='flex items-center h-12 rounded-[4px] overflow-hidden'>
                <input className='w-[780px] h-full text-[18px] placeholder:text-[18px] py-[12px] px-[24px]' type="text" placeholder='Izlash...' />
                <button className='w-[64px] h-full bg-[#a30041] text-white flex items-center justify-center text-[28px] font-bold'>
                  <AiOutlineSearch />
                </button>
              </div>
            </div>

            <div className='flex items-center space-x-[35px]'>
              <div className='w-[287px] cursor-pointer h-20 bg-white rounded-[4px] py-2 px-4 flex items-center text-[#a30041] hover:bg-[#a30041] hover:text-white transition-all duration-300'>
                <IoLanguageSharp className='text-[55px]' />
                <div className='ml-[10px]'>
                  <h5 className='text-[17px] font-bold'>Tillar</h5>
                  <p className='text-[15px]'>26 ta o'quvchi</p>
                </div>
              </div>
              <div className='w-[287px] cursor-pointer h-20 bg-white rounded-[4px] py-2 px-4 flex items-center text-[#a30041] hover:bg-[#a30041] hover:text-white transition-all duration-300'>
                <FaDraftingCompass className='text-[48px]' />
                <div className='ml-[10px]'>
                  <h5 className='text-[17px] font-bold'>Aniq fanlar</h5>
                  <p className='text-[15px]'>26 ta o'quvchi</p>
                </div>
              </div>
              <div className='w-[287px] cursor-pointer h-20 bg-white rounded-[4px] py-2 px-4 flex items-center text-[#a30041] hover:bg-[#a30041] hover:text-white transition-all duration-300'>
                <AiTwotoneExperiment className='text-[55px]' />
                <div className='ml-[10px]'>
                  <h5 className='text-[17px] font-bold'>Tabiiy fanlar</h5>
                  <p className='text-[15px]'>26 ta o'quvchi</p>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center mt-[35px] space-x-[35px]'>
              <div className='w-[287px] cursor-pointer h-20 bg-white rounded-[4px] py-2 px-4 flex items-center text-[#a30041] hover:bg-[#a30041] hover:text-white transition-all duration-300'>
                <MdOutlineComputer className='text-[55px]' />
                <div className='ml-[10px]'>
                  <h5 className='text-[17px] font-bold'>IT texnologiyalari</h5>
                  <p className='text-[15px]'>26 ta o'quvchi</p>
                </div>
              </div>
              <div className='w-[287px] cursor-pointer h-20 bg-white rounded-[4px] py-2 px-4 flex items-center text-[#a30041] hover:bg-[#a30041] hover:text-white transition-all duration-300'>
                <GiSecretBook className='text-[48px]' />
                <div className='ml-[10px]'>
                  <h5 className='text-[17px] font-bold'>Gumanitar fanlar</h5>
                  <p className='text-[15px]'>26 ta o'quvchi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home