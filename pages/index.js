import Head from 'next/head'
import Image from 'next/image'
import MenuMobile from '../Components/MenuMobile';
import ThemeToggle from '../Components/ThemeToggle';
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react';
import section from '../public/images/section.png';
import toast from 'react-hot-toast';
import Header from '../Layouts/Header';
import Link from 'next/link';


export default function Home() {
  const [selectcategory, setselectcategory] = useState('همه')
  return (
    <Header title={'صفحه اصلی مگاوات'} height="h-full overflow-hidden">
      {/* Menu Home */}
      <div className='mt-52 lg:px-44 z-40 relative w-full'>
        <section className='lg:pt-2 px-4 py-4 w-full flex justify-center flex-col items-center'>
          <h1 className='lg:text-3xl text-xl sans-bolisher font-bold dark:text-wither text-center w-full'>دنبال چی میگردی؟</h1>
          <div className='lg:mt-6 mt-3 w-full flex justify-center items-center'>
            <div className='relative lg:w-4/6 w-full mt-6 block'>
              <input className='lg:border border-gray-200 lg:h-[80px] h-[72px] lg:text-sm text-xs dark:text-wither dark:border-brown search dark:bg-blacker w-full font-light transition-all duration-200 focus:outline-none lg:px-32 pr-28 text-secondery' spellCheck={false} autoComplete={'off'}
                placeholder='جستجو کنید...' />
              <div className='absolute px-6 left-0 top-0 bottom-0 flex justify-between items-center'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className='lg:w-8 lg:h-8 w-6 h-6 text-[#707070] dark:text-wither'
                  viewBox="0 0 37.913 38.807"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    data-name="Group 9"
                    transform="translate(-1.964 -1.964)"
                  >
                    <path
                      d="M17.978 2.714A15.264 15.264 0 112.714 17.978 15.264 15.264 0 0117.978 2.714z"
                      data-name="Path 23"
                    ></path>
                    <path
                      d="M36.059 34.254c1.525 1.28 2.171 3.022 1.444 3.889s-2.555.531-4.08-.748-2.176-3.021-1.447-3.89 2.557-.532 4.083.749z"
                      data-name="Path 24"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className='absolute right-2 z-40 w-28 top-0 bottom-0 flex justify-center items-center'>
                <Menu>
                  <Menu.Button className={'focus:outline-none'}>
                    <div className='absolute w-full right-0 top-0 rounded-r-[25px] bottom-0 left-0 pr-3 pl-3 flex justify-center text-xs text-secondery dark:text-wither items-center'>
                      <span className='ml-1.5'>{selectcategory ? selectcategory : 'همه'}</span>
                    </div>
                  </Menu.Button>
                  <Transition
                    as={'div'}
                    enter="transition ease-out duration-150"
                    enterFrom="transform opacity-0 scale-75"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-75">
                    <Menu.Items className="translate-y-36 -translate-x-10 right-0 top-0 transition ease-out duration-150 w-48 divide-y divide-gray-200 dark:divide-gray-800 rounded-md bg-white dark:bg-brown shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => setselectcategory('همه')}
                              className={`transition-all ease-out duration-200 ${active ? 'bg-primary text-white' : 'dark:text-textdark text-blacker'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {/* <Image src={iranIcon} width={'32px'} height={'32px'} /> */}
                              <span className='mx-2'>همه</span>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => setselectcategory('آکادمی مهندسی')}
                              className={`transition-all ease-out duration-200 ${active ? 'bg-primary text-white' : 'dark:text-textdark text-blacker'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {/* <Image src={iranIcon} width={'32px'} height={'32px'} /> */}
                              <span className='mx-2'>آکادمی مهندسی</span>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => setselectcategory('مهندسان خبره')}
                              className={`transition-all ease-out duration-200 ${active ? 'bg-primary text-white' : 'dark:text-textdark text-blacker'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {/* <Image src={EnglishIcon} width={'32px'} height={'32px'} /> */}
                              <span className='mx-2'>مهندسان خبره</span>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => setselectcategory('کالا و تجهیزات')}
                              className={`transition-all ease-out duration-200 ${active ? 'bg-primary text-white' : 'dark:text-textdark text-blacker'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {/* <Image src={EnglishIcon} width={'32px'} height={'32px'} /> */}
                              <span className='mx-2'>کالا و تجهیزات</span>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <div className='mt-10 w-60 mx-auto relative flex justify-center items-center'>
            <Image alt='image'  className='w-full h-full object-cover' src={section} />
          </div>
        </section>
      </div>
    </Header>
  )
}

