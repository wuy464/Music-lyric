import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RiCloseLine } from 'react-icons/ri'

import { logo } from '../assets'
import { links } from '../assets/constants'
import { HiOutlineMenu } from 'react-icons/hi'
const NavLinks = (handleClick) => (
  <div className='mt-10'>
    {links.map((item) => (
      <NavLink key={item.name} to={item.to} onClick={() => handleClick && handleClick()} className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400'>
        <item.icon className='w-6 h-6 mr-2 ' />
        {item.name}
      </NavLink>
    ))}
  </div>
)

const Sidebar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <div className='md:flex hidden flex-col py-10 w-[240px] px-4 bg-[#191624]'>
        <img src={logo} alt='logo' className='w-full h-14 object-contain' />
        <NavLinks />
      </div>

      {/* mobile */}
      <div className='absolute md:hidden block top-6 right-3 '>
        {mobileMenuOpen ? (
          <RiCloseLine onClick={() => setMobileMenuOpen(false)} className='text-white mr-2 w-6 h-6' />

        ) : <HiOutlineMenu className='text-white mr-2 w-6 h-6' onClick={() => setMobileMenuOpen(true)} />}
      </div>
      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-t1 from-white/10 to-[#493d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'} `}>
        <img src={logo} alt='logo' className='w-full h-14 object-contain' />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  )

};

export default Sidebar;