import Image from 'next/image';
import React from 'react'
import Header from '../../Layouts/Header';
export default function username() {
  return (
    <Header title="پروفایل سامان سیار" height='h-auto'>
      <div className='lg:pt-32 lg:px-52 mt-10 pb-40 z-40'>
        <div className='grid-basket'>
          {/* Details Profile */}
          <div className='p-6 w-full rounded-lg bg-white lg:col-span-8 shadow-sm'>
            <h1 className='title-box text-primary sans-bolisher w-32'>پروفایل من</h1>
            <div className='mt-3 w-full relative'>
              <div className='flex justify-start items-center'>
                <div>
                  <Image src={'/images/avatar.jpeg'} className='object-cover rounded-full' alt={'Image'} width='60px' height='60px' />
                </div>
                <div className='mx-3 flex flex-col'>
                  <div className='sans-bolisher text-base'>سامان سیار</div>
                  <div className='sans-bolish text-xs text-gray-400 mt-1'>مهندس کامپیوتر</div>
                </div>
              </div>
              <div className='mt-3 w-full text-sm sans-bolish leading-7 text-gray-600'>
                یک نوجوان سخت‌کوش و خودانگیزه که روی خودش کار می‌کند تا بهترین توسعه‌دهنده وب React ,Laravel باشد. من وقتم را صرف یادگیری و به کارگیری دانش فرانت اند در زندگی ام می کنم تا آن را آسان تر و زیباتر کنم. به لطف مهارت های ارتباطی خوب و دانش کامل انگلیسی من می توانم بر هر اشکالی در زندگی ام غلبه کنم!
              </div>
            </div>
          </div>
          {/* Contact Profile */}
          <div className='p-6 w-full rounded-lg bg-white lg:col-span-4 shadow-sm'>
            <h1 className='title-box sans-bolisher border-none w-32'>اطلاعات تماس</h1>
            <ul>
              <li className='flex items-start flex-col mt-2'>
                <span className='sans-bolish text-sm text-gray-500'>آدرس ایمیل</span>
                <span className='sans-bolisher text-sm text-gray-800 mt-1.5'>samansayyar.dev@gmail.com</span>
              </li>
              {/* <li className='flex items-start flex-col mt-4'>
                <span className='sans-bolish text-sm text-gray-500'>شماره موبایل</span>
                <span className='sans-bolisher text-sm text-gray-800 mt-1.5'>09016189372</span>
              </li> */}
            </ul>
          </div>
          {/* Information Profile */}
          <div className='px-6 pt-6 pb-8 w-full rounded-lg bg-white lg:col-span-8 shadow-sm'>
            <h1 className='title-box sans-bolisher border-none w-32'>اطلاعات اولیه</h1>
            <ul className='grid grid-cols-2 gap-6 mt-3'>
              <li className='flex items-start flex-col'>
                <span className='sans-bolish text-sm text-gray-500'>نام و نام خانوادگی</span>
                <span className='sans-bolisher text-sm text-gray-800 mt-1.5'>سامان سیار</span>
              </li>
              <li className='flex items-start flex-col'>
                <span className='sans-bolish text-sm text-gray-500'>جنسیت</span>
                <span className='sans-bolisher text-sm text-gray-800 mt-1.5'>مرد</span>
              </li>
              <li className='flex items-start flex-col'>
                <span className='sans-bolish text-sm text-gray-500'>وضعیت تاهل</span>
                <span className='sans-bolisher text-sm text-gray-800 mt-1.5'>مجرد</span>
              </li>
              <li className='flex items-start flex-col'>
                <span className='sans-bolish text-sm text-gray-500'>وضعیت نظام وظیفه</span>
                <span className='sans-bolisher text-sm text-gray-800 mt-1.5'>معافیت تحصیلی</span>
              </li>
              <li className='flex items-start flex-col'>
                <span className='sans-bolish text-sm text-gray-500'>شهر محل سکونت</span>
                <span className='sans-bolisher text-sm text-gray-800 mt-1.5'>نوشهر</span>
              </li>
              <li className='flex items-start flex-col'>
                <span className='sans-bolish text-sm text-gray-500'>گروه شغلی مورد علاقه</span>
                <span className='sans-bolisher text-sm text-gray-800 mt-1.5'>مهندسی کامپیوتر  </span>
              </li>

            </ul>
          </div>
          {/* Information Profile */}
          <div className='px-6 pt-6 pb-8 w-full rounded-lg bg-white lg:col-span-8 shadow-sm'>
            <h1 className='title-box sans-bolisher border-none w-32'>سوابق کاری</h1>
            <ul className='flex flex-col space-y-4 mt-3 divide-y divide-gray-300'>
              <li className='flex items-start flex-col pt-3'>
                <span className='sans-bolish text-xs text-gray-600'>شرکت کم  -  تیر 1394 - تیر 1395 ( کمتر از یک سال )</span>
                <span className='sans-bolish text-xs text-gray-600 mt-1.5'>برنامه نویس و تحلیلگر</span>
              </li>
              <li className='flex items-start flex-col pt-3'>
                <span className='sans-bolish text-xs text-gray-600'>شرکت کم  -  تیر 1394 - تیر 1395 ( کمتر از یک سال )</span>
                <span className='sans-bolish text-xs text-gray-600 mt-1.5'>برنامه نویس و تحلیلگر</span>
              </li>
              <li className='flex items-start flex-col pt-3'>
                <span className='sans-bolish text-xs text-gray-600'>شرکت کم  -  تیر 1394 - تیر 1395 ( کمتر از یک سال )</span>
                <span className='sans-bolish text-xs text-gray-600 mt-1.5'>برنامه نویس و تحلیلگر</span>
              </li>
              <li className='flex items-start flex-col pt-3'>
                <span className='sans-bolish text-xs text-gray-600'>شرکت کم  -  تیر 1394 - تیر 1395 ( کمتر از یک سال )</span>
                <span className='sans-bolish text-xs text-gray-600 mt-1.5'>برنامه نویس و تحلیلگر</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Header>
  )
}
