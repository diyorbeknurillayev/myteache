import React from 'react'
import { AiOutlineSearch, AiTwotoneExperiment } from 'react-icons/ai'
import { IoLanguageSharp } from 'react-icons/io5'
import { FaDraftingCompass } from 'react-icons/fa'
import { MdOutlineComputer } from 'react-icons/md'
import { GiSecretBook } from 'react-icons/gi'
import avatar from './avatar.png'
import img_1 from '../components/img_1.png'
import vector from './Vector.png'
import coins from './coins 1.png'
import star from './star.png'
import users from './users.png'
import { Link } from 'react-router-dom'

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
              <div className='w-[287px] cursor-pointer h-20 bg-white rounded-[4px] py-2 px-4 flex items-center text-[#a30041] hover:bg-[#A30041] hover:text-white transition-all duration-300'>
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

      <section className="flex h-[65vh] items-center justify-center">
        <div className="container">
          <div className='w-full overflow-hidden rounded-[8px] flex items-center justify-center'>
            <div className='space-y-8 text-white rounded-[8px] rounded-r-[0px] px-10 py-[64px] bg-[#A30041] w-[50%] h-[480px]'>
              <h2 className='font-bold text-[48px]'>Darslar qay tarzda o'tiladi?</h2>
              <p className='font-[400] text-[30px]'>Online va individual tarzda shaxsiy o‘qituvchi
                bilan, uyda, ishxonada, va umuman o‘zingizga
                qulay vaqtdava qulay joyda masofadan
                o‘rganing.</p>
            </div>
            <div className='w-[50%] h-[480px] bg-[#a30041]'>
              <img src={img_1} className='w-full h-full' alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='h-[100vh] flex items-center'>
        <div className="container">
          <h3 className='text-[45px] font-medium text-[#37363C] tracking-[2px]'>Bizning TOP o'qituvchilarimiz</h3>
          <p className='mb-6 font-[400] text-[#37363c] text-[18px]'>Hoziroq o'zingizga ma'qul ustozni tanlang va o'rganishni boshlang.  MyTeacher sizga.O'zbekistonning barchaburchagidan eng kuchli va saralangan
            ustozlarni topadi va ushbu ro'yhatda ko'rsatadi. DarTslar individual tarzdao'tiladi, har bir dars 1 soatdan davom etadi.</p>

          <div className='space-y-8'>
            <div className='space-x-8 flex items-center justify-center w-full'>
              <div className='px-5 py-7 w-[49%] flex items-center justify-center space-x-5 h-[280px] bg-[#F5F5F7] rounded-[8px] border border-[rgba(55, 54, 60, 0.1)]'>
                <img src={avatar} alt="" />
                <div className='space-y-2'>
                  <h3 className='font-bold text-[#37363C] text-[25px]'>Diyorbek Nurullayev</h3>
                  <div className='flex items-center'>
                    <img src={vector} alt="" />
                    <h4 className='ml-1 font-medium text-[#37363C] text-[17px]'>IELTS</h4>
                  </div>
                  <div className='space-x-4 flex items-center'>
                    <div className='flex items-center'>
                      <img src={coins} alt="" />
                      <p className='text-[#37363C] text-[20px]'><span className='text-[#A30041] font-medium text-[24px]'>50 000</span>/soat</p>
                    </div>
                    <div className='flex space-x-1 items-center'>
                      <img src={star} alt="" />
                      <p className='font-medium text-[24px] text-[#A30041]'>5</p>
                      <p className='text-[#37363C] text-[16px] mt-[5.5px]'><span className='text-[#0DAD13]'>16 ta</span> sharx</p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <img src={users} alt="" />
                    <p className='text-[#37363C] mt-[6px] tetx-[16px]'><span className='text-[#0DAD13]'>12 ta</span> talaba</p>
                  </div>
                  <p className='text-[16px] text-[#37363C]'>
                    Tajriba: <span className='text-[#0DAD13]'>1 yil</span>,   Daraja: <span className='text-[#0DAD13]'>C1</span>,   Sertifikat: <span className='text-[#0DAD13]'>IELTS-6.5</span>,
                    Qaysi tillarni biladi: <span className='text-[#0DAD13]'>Rus tili, Ingliz tili, Tojik tili.</span>
                  </p>
                  <div className='mt-2'>
                    <Link href='/' className='text-[18px] text-[#0DAD13]'>Batafsil</Link>
                  </div>
                </div>
              </div>
              <div className='px-5 py-7 w-[49%] flex items-center justify-center space-x-5 h-[280px] bg-[#F5F5F7] rounded-[8px] border border-[rgba(55, 54, 60, 0.1)]'>
                <img src={avatar} alt="" />
                <div className='space-y-2'>
                  <h3 className='font-bold text-[#37363C] text-[25px]'>Diyorbek Nurullayev</h3>
                  <div className='flex items-center'>
                    <img src={vector} alt="" />
                    <h4 className='ml-1 font-medium text-[#37363C] text-[17px]'>IELTS</h4>
                  </div>
                  <div className='space-x-4 flex items-center'>
                    <div className='flex items-center'>
                      <img src={coins} alt="" />
                      <p className='text-[#37363C] text-[20px]'><span className='text-[#A30041] font-medium text-[24px]'>50 000</span>/soat</p>
                    </div>
                    <div className='flex space-x-1 items-center'>
                      <img src={star} alt="" />
                      <p className='font-medium text-[24px] text-[#A30041]'>5</p>
                      <p className='text-[#37363C] text-[16px] mt-[5.5px]'><span className='text-[#0DAD13]'>16 ta</span> sharx</p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <img src={users} alt="" />
                    <p className='text-[#37363C] mt-[6px] tetx-[16px]'><span className='text-[#0DAD13]'>12 ta</span> talaba</p>
                  </div>
                  <p className='text-[16px] text-[#37363C]'>
                    Tajriba: <span className='text-[#0DAD13]'>1 yil</span>,   Daraja: <span className='text-[#0DAD13]'>C1</span>,   Sertifikat: <span className='text-[#0DAD13]'>IELTS-6.5</span>,
                    Qaysi tillarni biladi: <span className='text-[#0DAD13]'>Rus tili, Ingliz tili, Tojik tili.</span>
                  </p>
                  <div className='mt-2'>
                    <Link href='/' className='text-[18px] text-[#0DAD13]'>Batafsil</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='space-x-8 flex items-center justify-center w-full'>
              <div className='px-5 py-7 w-[49%] flex items-center justify-center space-x-5 h-[280px] bg-[#F5F5F7] rounded-[8px] border border-[rgba(55, 54, 60, 0.1)]'>
                <img src={avatar} alt="" />
                <div className='space-y-2'>
                  <h3 className='font-bold text-[#37363C] text-[25px]'>Diyorbek Nurullayev</h3>
                  <div className='flex items-center'>
                    <img src={vector} alt="" />
                    <h4 className='ml-1 font-medium text-[#37363C] text-[17px]'>IELTS</h4>
                  </div>
                  <div className='space-x-4 flex items-center'>
                    <div className='flex items-center'>
                      <img src={coins} alt="" />
                      <p className='text-[#37363C] text-[20px]'><span className='text-[#A30041] font-medium text-[24px]'>50 000</span>/soat</p>
                    </div>
                    <div className='flex space-x-1 items-center'>
                      <img src={star} alt="" />
                      <p className='font-medium text-[24px] text-[#A30041]'>5</p>
                      <p className='text-[#37363C] text-[16px] mt-[5.5px]'><span className='text-[#0DAD13]'>16 ta</span> sharx</p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <img src={users} alt="" />
                    <p className='text-[#37363C] mt-[6px] tetx-[16px]'><span className='text-[#0DAD13]'>12 ta</span> talaba</p>
                  </div>
                  <p className='text-[16px] text-[#37363C]'>
                    Tajriba: <span className='text-[#0DAD13]'>1 yil</span>,   Daraja: <span className='text-[#0DAD13]'>C1</span>,   Sertifikat: <span className='text-[#0DAD13]'>IELTS-6.5</span>,
                    Qaysi tillarni biladi: <span className='text-[#0DAD13]'>Rus tili, Ingliz tili, Tojik tili.</span>
                  </p>
                  <div className='mt-2'>
                    <Link href='/' className='text-[18px] text-[#0DAD13]'>Batafsil</Link>
                  </div>
                </div>
              </div>
              <div className='px-5 py-7 w-[49%] flex items-center justify-center space-x-5 h-[280px] bg-[#F5F5F7] rounded-[8px] border border-[rgba(55, 54, 60, 0.1)]'>
                <img src={avatar} alt="" />
                <div className='space-y-2'>
                  <h3 className='font-bold text-[#37363C] text-[25px]'>Diyorbek Nurullayev</h3>
                  <div className='flex items-center'>
                    <img src={vector} alt="" />
                    <h4 className='ml-1 font-medium text-[#37363C] text-[17px]'>IELTS</h4>
                  </div>
                  <div className='space-x-4 flex items-center'>
                    <div className='flex items-center'>
                      <img src={coins} alt="" />
                      <p className='text-[#37363C] text-[20px]'><span className='text-[#A30041] font-medium text-[24px]'>50 000</span>/soat</p>
                    </div>
                    <div className='flex space-x-1 items-center'>
                      <img src={star} alt="" />
                      <p className='font-medium text-[24px] text-[#A30041]'>5</p>
                      <p className='text-[#37363C] text-[16px] mt-[5.5px]'><span className='text-[#0DAD13]'>16 ta</span> sharx</p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <img src={users} alt="" />
                    <p className='text-[#37363C] mt-[6px] tetx-[16px]'><span className='text-[#0DAD13]'>12 ta</span> talaba</p>
                  </div>
                  <p className='text-[16px] text-[#37363C]'>
                    Tajriba: <span className='text-[#0DAD13]'>1 yil</span>,   Daraja: <span className='text-[#0DAD13]'>C1</span>,   Sertifikat: <span className='text-[#0DAD13]'>IELTS-6.5</span>,
                    Qaysi tillarni biladi: <span className='text-[#0DAD13]'>Rus tili, Ingliz tili, Tojik tili.</span>
                  </p>
                  <div className='mt-2'>
                    <Link href='/' className='text-[18px] text-[#0DAD13]'>Batafsil</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;