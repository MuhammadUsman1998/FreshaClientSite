import React, { Fragment } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../../assets/images/fresha.png';
const navigation = [
  // { name: 'Dashboard', href: '#', current: true },
  { name: 'Sign Up', href: '/signup', current: false },
  { name: 'Login', href: '/login', current: false },
  { name: 'Menu', href: '#', current: false },
]

function classNames(...classNamees) {
  return classNamees.filter(Boolean).join(' ')
}
export const HeaderComponent = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center 2xl:hidden ">
                {/* Mobile menu button*/}
                <Disclosure.Button className=" inline-flex items-center justify-center p-2 
                rounded-md text-gray-400
                 hover:text-white hover:bg-gray-700 
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden">
                  <span className="sr-only ">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="  flex-1 flex items-center justify-center sm:items-stretch sm:justify-start  text-2xl">
                <div className="flex-shrink-0 flex items-center ">
                  <img
                    className=" w-32 pt-2 cursor-pointer  "
                    src={Logo}

                  />
                </div>
                <div className="sm:ml-6 w-full  ">
                  <div className=" space-x-4 mt-4 ">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? ' text-black' : ' hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium float-right'
                        )}
                      // aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Profile dropdown */}
              <Menu as="div" className="ml-3 relative">
                {/* <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div> */}
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                </Transition>
              </Menu>
            </div>
          </div>
          {/* </div> */}

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

  );
}
