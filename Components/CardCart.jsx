import Image from 'next/image';
import b1 from '../public/images/b1.webp';

export default function CardCart({ price, title }) {
    return (
        <div className='w-full flex justify-between items-center'>
            <div className="card-basket lg:flex-row flex-col w-full flex justify-between items-center bg-white rounded-lg">
                <div className="flex justify-start lg:flex-row flex-col space-x-4 items-start w-full lg:p-5 px-4 pt-4">
                    <div className='lg:w-72 w-full h-full'>
                        <Image src={b1} className="rounded-lg w-full h-full object-cover" alt='image' />
                    </div>
                    <div className='flex justify-start py-3 items-start w-full flex-col px-4'>
                        <div className='sans-bolisher text-gray-800 text-xl'>کتابخانه‌های پرکاربرد React</div>
                        <div className='text-xs sans-bolish mt-3'>مدرس دوره : سامان سیار</div>
                    </div>
                </div>
                <div className='flex space-x-6 w-full lg:justify-end justify-between items-center lg:p-5 pb-4 pr-6'>
                    <div className='lg:block hidden'></div>
                    <div className='text-primary/80 lg:text-md text-lg sans-bolisher mt-4'>
                        {price.toLocaleString() + ' تومان'}
                    </div>
                    <div>
                        <svg className="lg:w-6 w-8 lg:h-6 w-8 mt-3 text-secondery" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
