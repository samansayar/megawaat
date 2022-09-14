import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import Header from '../../Layouts/Header'
import Input from '../../Components/Input'
import { useRouter } from 'next/router'
import Breadcrumb from '../../Components/Breadcrump'
import Data from '../../utils/res-util.json'
import CheckBox from '../../Components/CheckBox'
import Btn from '../../Components/Btn'
import Loading from '../../Components/loading'
import Select from '../../Components/Select'
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import FileUpload from '../../Components/FileUpload'
import NeedToBuy from '../../Components/page/NeedToBuy'
import RequestRent from '../../Components/page/RequestRent'

export default function UploadProduct() {
    const [categorysubroot, setcategorysubroot] = useState(null)
    const [type, settype] = useState(null)
    const [selectsub, setselectsub] = useState()
    const [loading, setloading] = useState(false);
    const [returnproduct, setreturnproduct] = useState(null);
    const [expireproducct, setexpireproducct] = useState(null);
    const [expireproducctkalibre, setexpireproducctkalibre] = useState(null);
    const [statusproduct, setstatusproduct] = useState(null);
    const [garantystatus, setgarantystatus] = useState(null);
    const [saleproduct, setsaleproduct] = useState(null);
    const [selectstartrecive, setselectstartrecive] = useState(null);
    const defaultFrom = {
        year: 1401,
        month: 1,
        day: 1,
    };
    const defaultTo = {
        year: 1401,
        month: 1,
        day: 31,
    };
    const defaultRange = {
        from: defaultFrom,
        to: defaultTo,
    };

    const [selectedDay, setSelectedDay] = useState(defaultRange);
    useEffect(() => {
        console.log(expireproducct)
    }, [expireproducct])

    const renderCustomInput = ({ ref }) => (
        <div className="w-full">
            <input
                readOnly
                ref={ref} // necessary
                placeholder="بازه زمانی در دسترس بودن به شمسی*"
                value={selectedDay.from && selectedDay.to ? ` از  ${selectedDay.from?.year + '/' + selectedDay.from?.month + '/' + selectedDay.from?.day}  تا  ${selectedDay.to?.year + '/' + selectedDay.to?.month + '/' + selectedDay.to?.day}` : ''}
                className='text-sm sans-bolish placeholder:text-black
             dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none
              focus:border-primary transition duration-200'
            />
        </div>
    )
    const ProductinptDatapicker = ({ ref }) => (
        <div className="w-full">
            <input
                readOnly
                ref={ref} // necessary
                placeholder="اعتبار زمانی این آگهی"
                value={expireproducct ? expireproducct.year + '/' + expireproducct.month + '/' + expireproducct.day : ''}
                className='text-sm sans-bolish placeholder:text-black
             dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none
              focus:border-primary transition duration-200'
            />
        </div>
    )
    const ProductinptDatapickerkalibre = ({ ref }) => (
        <div className="w-full">
            <input
                readOnly
                ref={ref} // necessary
                placeholder="اعتبار زمانی کالیبراسیون دستگاه"
                value={expireproducctkalibre ? expireproducctkalibre.year + '/' + expireproducctkalibre.month + '/' + expireproducctkalibre.day : ''}
                className='text-sm sans-bolish placeholder:text-black
             dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none
              focus:border-primary transition duration-200'
            />
        </div>
    )
    const saleproductdate = ({ ref }) => (
        <div className="w-full">
            <input
                readOnly
                ref={ref} // necessary
                placeholder="اعتبار زمانی این آگهی : مدت زمان یا اعلام فروشنده یا فروش کالا"
                value={expireproducctkalibre ? expireproducctkalibre.year + '/' + expireproducctkalibre.month + '/' + expireproducctkalibre.day : ''}
                className='text-sm sans-bolish placeholder:text-black
             dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none
              focus:border-primary transition duration-200'
            />
        </div>
    )
    const startrecive = ({ ref }) => (
        <div className="w-full">
            <input
                readOnly
                ref={ref} // necessary
                placeholder="زمان تحویل"
                value={selectstartrecive ? selectstartrecive.year + '/' + selectstartrecive.month + '/' + selectstartrecive.day : ''}
                className='text-sm sans-bolish placeholder:text-black
             dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none
              focus:border-primary transition duration-200'
            />
        </div>
    )
    const router = useRouter();
    useEffect(() => {
        setselectsub(router.asPath)
    }, [])

    const submitHandler = () => {
        setloading(!loading);
        console.log('submitHandler')
    }
    const handleClose = () => {
        setloading(false);
    };

    return (
        <Header title={'ایجاد و بارگذاری - مگاوات'}>
            <Loading handleClose={handleClose} loading={loading} />
            <div className='lg:pt-32 lg:px-52 pt-20 pb-40 z-40 w-full'>
                <div className="mx-auto lg:px-0 px-6 transition-all duration-200 ease-in-out">
                    <Breadcrumb data={[
                        ['داشبورد', '/dashboard'],
                        ['ثبت کالا یا تجهیزات', Data.link.upload.product]
                    ]} />
                    <div className='lg:text-[45px] text-2xl -z-40 lg:py-8 py-4 text-gray-900 dark:text-textdark'>
                        <p className='sans-bolisher lg:text-[45px] text-2xl'>ثبت کالا یا تجهیزات</p>
                    </div>
                    <div className={`pt-5 mt-5 border-t border-gray-300 pb-12`}>
                        <div className="w-full relative block">
                            <div className="block relative w-full">
                                <Input place={'عنوان کالا یا تجهیز'} loading={loading} />
                            </div>
                            <div className="grid lg:grid-cols-2 gap-4 relative w-full mt-3">
                                <div className='relative block'>
                                    <Input place={'نام شرکت سازنده'} value={''} loading={loading} />
                                </div>
                                <div className='relative block'>
                                    <Input place={'کشور'} value={''} loading={loading} />
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-3 gap-4 relative w-full mt-3">
                                <Select onChange={setcategorysubroot} value={categorysubroot} data={categorySubRoot} place={'مشخصات'} />
                                <Select onChange={settype} value={type} data={typeproduct} place={'نوع کالا'} />
                                <Select onChange={settype} value={type} data={typeproduct} place={'دسته بندی ها'} />
                            </div>
                        </div>
                        <div className="z-20 relative">
                            {type && type.name == typeproduct[0].name && (
                                <div className='my-2 w-full'>
                                    <h1 className='w-full text-3xl my-10 text-brown dark:text-textdark sans-bolisher'>کالایه <span className='text-primary sans-bolisher'>{type.name}</span></h1>
                                    <div className="grid lg:grid-cols-3 gap-4 relative w-full mt-3">
                                        <div className='relative block'>
                                            <Input place={'نام فروشگاه یا کاربر تامین کننده'} value={''} loading={loading} />
                                        </div>
                                        <div className='relative block'>
                                            <Input place={'عمر دستگاه'} value={''} loading={loading} />
                                        </div>
                                        <div className='relative block w-full'>
                                            <div className='w-full'>
                                                <DatePicker
                                                    value={selectedDay}
                                                    onChange={setSelectedDay}
                                                    locale={'fa'}
                                                    renderInput={renderCustomInput} // render a custom input
                                                    shouldHighlightWeekends
                                                    calendarClassName='sans-bolish w-full'
                                                />
                                            </div>
                                            {/* <Input place={'بازه زمانی در دسترس بودن به شمسی*'} value={''} loading={loading} /> */}
                                        </div>
                                    </div>
                                    <div className="grid lg:grid-cols-3 gap-4 relative w-full mt-3">
                                        <div className='relative block'>
                                            <Input place={'تعداد'} type={'number'} value={''} loading={loading} />
                                        </div>
                                        <div className='relative block'>
                                            <Input place={'ضمانت'} type={'text'} value={''} loading={loading} />
                                        </div>
                                        <div className='relative block'>
                                            <Input place={'الزام به تکنسین همراه'} type={'text'} value={''} loading={loading} />
                                        </div>
                                    </div>
                                    <div className="grid lg:grid-cols-3 gap-4 relative w-full mt-3">
                                        <div className='relative block'>
                                            <Input place={'قیمت پیشنهادی اجاره روزانه'} type={'text'} inputMode={'number'} value={''} loading={loading} />
                                        </div>
                                        <div className='relative block'>
                                            <Select place={'ارسال و بازگرداندن با'} value={returnproduct} onChange={setreturnproduct} data={[{ name: 'اجاره دهنده' }, { name: 'اجاره گیرنده' }]} />
                                        </div>
                                        <div className='relative block'>
                                            <div className='w-full'>
                                                <DatePicker
                                                    value={expireproducct}
                                                    onChange={setexpireproducct}
                                                    locale={'fa'}
                                                    renderInput={ProductinptDatapicker} // render a custom input
                                                    shouldHighlightWeekends
                                                    calendarClassName='sans-bolish w-full'
                                                />
                                            </div>
                                        </div>
                                        <div className='relative block'>
                                            <DatePicker
                                                value={expireproducctkalibre}
                                                onChange={setexpireproducctkalibre}
                                                locale={'fa'}
                                                renderInput={ProductinptDatapickerkalibre} // render a custom input
                                                shouldHighlightWeekends
                                                calendarClassName='sans-bolish w-full'
                                            />
                                        </div>
                                        <div className='relative block'>
                                            <Input place={'ادرس محل فعلی دستگاه'} type={'text'} inputMode={'number'} value={''} loading={loading} />
                                        </div>
                                    </div>
                                    <div className="flex relative w-full mt-3">
                                        <FileUpload place={'ثبت عکس کالا یا دستگاه'} />
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <CheckBox title={'را خوانده ام و موارد مربوطه را میپذیرم'} titlelink={'قوانین ثبت کالا یا تجهیزات'} />
                                    </div>
                                    <div className='mt-6 w-full relative'>
                                        <Btn title={'بارگذاری'} onClick={submitHandler} />
                                    </div>

                                </div>
                            )}

                            {type && type.name == typeproduct[1].name && (
                                <div className='my-2 w-full'>
                                    <h1 className='w-full text-3xl my-10 text-brown dark:text-textdark sans-bolisher'>کالایه <span className='text-primary sans-bolisher'>{type.name}</span></h1>
                                    <div className="grid lg:grid-cols-3 gap-4 relative w-full mt-3">
                                        <div className='relative block'>
                                            <Input place={'نام فروشگاه یا کابر تامین کننده'} value={''} loading={loading} />
                                        </div>
                                        <div className='relative block w-full'>
                                            <div className='w-full'>
                                                <DatePicker
                                                    value={selectstartrecive}
                                                    onChange={setselectstartrecive}
                                                    locale={'fa'}
                                                    renderInput={startrecive} // render a custom input
                                                    shouldHighlightWeekends
                                                    calendarClassName='sans-bolish w-full'
                                                />
                                            </div>
                                            {/* <Input place={'بازه زمانی در دسترس بودن به شمسی*'} value={''} loading={loading} /> */}
                                        </div>
                                        <div className='relative block'>
                                            <Input place={'قیمت کالا'} value={''} inputMode={'number'} loading={loading} />
                                        </div>
                                    </div>
                                    <div className="grid lg:grid-cols-2 gap-4 relative w-full mt-3">
                                        <div className='relative block'>
                                            <Input place={'تعداد'} type={'number'} value={''} loading={loading} />
                                        </div>
                                        <div className='relative block'>
                                            <Input place={'هزینه حمل'} value={''} inputMode={'number'} loading={loading} />
                                        </div>
                                    </div>
                                    <div className="grid lg:grid-cols-2 gap-4 relative w-full mt-3">
                                        <div className='relative block'>
                                            <Select place={'وضعیت کالا'} value={statusproduct} onChange={setstatusproduct} data={[{ name: 'نو' }, { name: 'دست دوم' }]} />
                                        </div>
                                        <div className='relative block'>
                                            <Select place={'گارانتی'} value={garantystatus} onChange={setgarantystatus} data={[{ name: 'دارد' }, { name: 'ندارد' }]} />
                                        </div>
                                    </div>
                                    <div className='relative block w-full mt-3 z-20'>
                                        <DatePicker
                                            value={saleproduct}
                                            onChange={setsaleproduct}
                                            locale={'fa'}
                                            renderInput={saleproductdate} // render a custom input
                                            shouldHighlightWeekends
                                            calendarClassName='sans-bolish w-full z-[9999]'
                                        />
                                    </div>
                                    <div className='relative block w-full mt-3'>
                                        <FileUpload place={'ثبت عکس کالا یا دستگاه'} />
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <CheckBox title={'را خوانده ام و موارد مربوطه را میپذیرم'} titlelink={'قوانین ثبت کالا یا تجهیزات'} />
                                    </div>
                                    <div className='mt-6 w-full relative'>
                                        <Btn title={'بارگذاری'} onClick={submitHandler} />
                                    </div>
                                </div>
                            )}
                            {type && type.name == typeproduct[2].name && (
                                <NeedToBuy type={type} />
                            )}
                            {type && type.name == typeproduct[3].name && (
                                <RequestRent type={type} />
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </Header>
    )
}

const categorySubRoot = [
    { name: 'کابل' },
    { name: 'ژنراتور' },
    { name: 'ترانس های قدرت' },
    { name: 'حفاظت الکترونیک' },
]

const typeproduct = [
    { name: 'اجاره ای' },
    { name: 'فروشی' },
    { name: 'نیاز به خرید' },
    { name: 'نیاز به اجاره' },
]

const typeCourseSee = [
    { name: 'ضبط شده' },
    { name: 'وبینار' },
    { name: 'حضوری' },
]