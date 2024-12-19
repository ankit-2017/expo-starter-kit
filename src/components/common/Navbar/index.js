import { Link } from "expo-router";
import React,  { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Logo from '../../../../assets/splash.png'
import useClickOutside from "../../../hooks/useClickOutside";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const dropRef = useClickOutside(() => setShowDropdown(false))
  const mobileNavigationRef = useClickOutside(() => setShowNav(false))

  const navItems = [
    { id: 1, text: 'HOME',
      subHeadings: [
        { id: '123', subText: 'HOME 1' },
        { id: '124', subText: 'HOME 2' },
        { id: '121', subText: 'HOME 3' }
      ]
    },
    { id: 2, text: 'SERVICES' },
    { id: 3, text: 'CLASSES',
      subHeadings: [
        { id: '11', subText: 'CLASSES 1' },
        { id: '111', subText: 'CLASSES 2' },
        { id: '1111', subText: 'CLASSES 3' }
      ]
     },
    { id: 4, text: 'BLOGS' },
    { id: 5, text: 'ABOUT' },
    { id: 6, text: 'CONTACT' },
  ];

  // const handleDropdown = () => {
  //   console.log('mouse enter')
  //   setShowDropdown(!showDropdown)
  // }

  return (
    <div className="bg-purple-800 h-16">
      <div className="mx-4 md:mx-16 flex justify-between items-center">
        <div className="">
          <div>
            <img src={Logo.uri} alt="Logo" className="h-16" />
          </div>
        </div>
        <div className="">
            <ul className="hidden md:flex">
              {
                navItems.map(items => (
                  <div key={items.id} ref={dropRef} className="relative" onMouseEnter={() => setShowDropdown(items.id)}>
                    <li className="p-4 cursor-pointer hover:bg-orange-500 hover:text-white hover:py-4 duration-1000">
                      <Link className="text-[16px] text-white font-Nunito font-extralight" href="">{items.text}</Link>
                      {
                        items.subHeadings?.length && (
                            <EvilIcons className="pl-1" name="chevron-down" size={24} color="white" />
                        )
                      }
                    </li>
                    { showDropdown === items.id && (
                      <div className="z-[9999] absolute transition-all mt-[3px] bg-purple-800 w-44">
                        <ul className="text-sm text-black">
                          {
                            items?.subHeadings?.map(ele => (
                              <li key={ele.id} className="p-4 border-b-[1px] border-b-slate-500 cursor-pointer hover:bg-orange-500 hover:text-white ease-in-out hover:py-4 duration-700">
                                <Link className="text-[16px] text-white font-Nunito font-extralight" href="">{ele.subText}</Link>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    )
                  }
                  </div>
                ))
              }
            </ul>
        </div>
        {/* Mobile Navigation Icon */}
        <div onClick={() => setShowNav(!showNav)} className='block md:hidden'>
          {showNav ? <Ionicons className="cursor-pointer" name="close-circle-outline" size={24} color="white" /> : <Ionicons className="cursor-pointer" name="menu" size={20} color="white" />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          ref={mobileNavigationRef}
          className={
            showNav
              ? 'fixed md:hidden left-0 top-0 z-[9999] w-[60%] h-full border-r border-r-gray-900 bg-[#dbe0db] ease-in-out duration-500'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
          {/* Mobile Logo */}
          <div className="">
            <img src={Logo.uri} alt="Logo" className="h-14 m-auto my-4" />
          </div>

          {/* Mobile Navigation Items */}
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-2 border-b ease-in-out hover:bg-purple-800 duration-500 hover:text-white cursor-pointer border-gray-500'
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

