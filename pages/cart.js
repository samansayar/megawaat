import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';
import { useState } from 'react';
import CardCart from '../Components/CardCart';
import Header from '../Layouts/Header';

export default function Cart() {
    const [loading, setloading] = useState(true);
    return (
        <Header title={'سبد خرید - مگاوات'} height={'h-full'}>
            {loading ? (
                <div className='lg:pt-32 lg:px-52 mt-10 pb-40 z-40'>
                    <div className='grid-basket'>
                        {/* Details Checkout basket */}
                        <div className='w-full rounded-lg lg:col-span-8 flex space-y-4 flex-col items-center'>
                            <>
                                <CardCart price={'232000'} title={'کتابخانه‌های پرکاربرد React'} />
                                <CardCart price={'232000'} title={'کتابخانه‌های پرکاربرد React'} />
                                <CardCart price={'232000'} title={'کتابخانه‌های پرکاربرد React'} />
                                <CardCart price={'232000'} title={'کتابخانه‌های پرکاربرد React'} />
                            </>
                        </div>
                        {/* checkout Basket */}
                        <div className='p-6 w-full rounded-lg bg-white lg:col-span-4 lg:shadow-none shadow-md'>
                            <h1 className='title-box sans-bolisher'>اطلاعات پرداخت</h1>
                            <ui className='border-b pt-4 pb-6 border-textdark/50 mt-3 flex flex-col w-full space-y-6'>
                                <li className='flex justify-between items-center w-full text-sm'>
                                    <span className='text-gray-600  sans-bolish'>جمع کل</span>
                                    <span className='sans-bolish text-gray-800'>490,000 ﷼</span>
                                </li>
                                <li className='flex justify-between items-center w-full text-sm'>
                                    <span className='text-gray-600  sans-bolish'>تخفیف</span>
                                    <span className='sans-bolish text-red-600'>0 ﷼</span>
                                </li>
                            </ui>
                            <div className='py-4 w-full flex justify-center flex-col items-center text-sm'>
                                <span className='text-blacker  sans-bolish'>مبلغ قابل پرداخت</span>
                                <span className='text-primary lg:text-xl sans-bolisher mt-4'>490,000 ﷼</span>
                            </div>
                            <button className='btn-cu sans-bolish mt-3'>
                                تکمیل فرایند خرید
                                <svg className="w-3 rotate-90 h-3 mr-1" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.89981 9.35387C7.15581 9.35387 11.1708 2.98987 10.4488 2.26787C9.72681 1.54586 2.14181 1.47686 1.35081 2.26787C0.559806 3.05986 4.64481 9.35387 5.89981 9.35387Z" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex justify-center w-full items-center flex-col'>
                    <h1 className='lg:text-xl text-lg text-blue-gray-500 dark:text-textdark/80 opacity-80 sans-bolisher font-black w-full mt-16 mx-auto flex justify-center items-center'>سبد خرید شما خالی است!</h1>
                    <Player
                        loop
                        className='relative'
                        src="https://assets7.lottiefiles.com/private_files/lf30_cgfdhxgx.json"
                        style={{ height: '300px', width: '300px' }}
                    >
                    </Player>
                    <Link href={'/'}>
                        <div className='py-3 bg-primary px-2 sans-bolisher flex cursor-pointer text-xs sans-bolish justify-center text-center items-center w-44 mx-auto rounded-xl text-white'>
                            بازگشت به صفحه اصلی
                        </div>
                    </Link>
                </div>
            )}
        </Header>
    )
}
