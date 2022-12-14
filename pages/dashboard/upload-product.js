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
                placeholder="???????? ?????????? ???? ?????????? ???????? ???? ????????*"
                value={selectedDay.from && selectedDay.to ? ` ????  ${selectedDay.from?.year + '/' + selectedDay.from?.month + '/' + selectedDay.from?.day}  ????  ${selectedDay.to?.year + '/' + selectedDay.to?.month + '/' + selectedDay.to?.day}` : ''}
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
                placeholder="???????????? ?????????? ?????? ????????"
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
                placeholder="???????????? ?????????? ?????????????????????? ????????????"
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
                placeholder="???????????? ?????????? ?????? ???????? : ?????? ???????? ???? ?????????? ?????????????? ???? ???????? ????????"
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
                placeholder="???????? ??????????"
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
        <Header title={'?????????? ?? ???????????????? - ????????????'}>
            <Loading handleClose={handleClose} loading={loading} />
            <div className='lg:pt-32 lg:px-52 pt-20 pb-40 z-40 w-full'>
                <div className="mx-auto lg:px-0 px-6 transition-all duration-200 ease-in-out">
                    <Breadcrumb data={[
                        ['??????????????', '/dashboard'],
                        ['?????? ???????? ???? ??????????????', Data.link.upload.product]
                    ]} />
                    <div className='lg:text-[45px] text-2xl -z-40 lg:py-8 py-4 text-gray-900 dark:text-textdark'>
                        <p className='sans-bolisher lg:text-[45px] text-2xl'>?????? ???????? ???? ??????????????</p>
                    </div>
                    <div className={`pt-5 mt-5 border-t border-gray-300 pb-12`}>
                        <div className="w-full relative block">
                            <div className="block relative w-full">
                                <Input place={'?????????? ???????? ???? ??????????'} loading={loading} />
                            </div>
                            <div className="grid lg:grid-cols-2 gap-4 relative w-full mt-3">
                                <div className='relative block'>
                                    <Input place={'?????? ???????? ????????????'} value={''} loading={loading} />
                                </div>
                                <div className='relative block'>
                                    <Input place={'????????'} value={''} loading={loading} />
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-3 gap-4 relative w-full mt-3">
                                <Select onChange={setcategorysubroot} value={categorysubroot} data={categorySubRoot} place={'????????????'} />
                                <Select onChange={settype} value={type} data={typeproduct} place={'?????? ????????'} />
                                <Select onChange={settype} value={type} data={typeproduct} place={'???????? ???????? ????'} />
                            </div>
                        </div>
                        <div className="z-20 relative">
                            {type && type.name == typeproduct[0].name && (
                                <div className='my-2 w-full'>
                                    <h1 className='w-full text-3xl my-10 text-brown dark:text-textdark sans-bolisher'>???????????? <span className='text-primary sans-bolisher'>{type.name}</span></h1>
                                    <div className="grid lg:grid-cols-3 gap-4 relative w-full mt-3">
                                        <div className='relative block'>
                                            <Input place={'?????? ?????????????? ???? ?????????? ?????????? ??????????'} value={''} loading={loading} />
                                        </div>
                                        <div className='relative block'>
                                            <Input place={'?????? ????????????'} value={''} loading={loading} />
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
                                            {/* <Input place={'???????? ?????????? ???? ?????????? ???????? ???? ????????*'} value={''} loading={loading} /> */}
                                        </div>
                                    </div>
                                    <div className="grid lg:grid-cols-3 gap-4 relative w-full mt-3">
                                        <div className='relative block'>
                                            <Input place={'??????????'} type={'number'} value={''} loading={loading} />
                                        </div>
                                        <div className='relative block'>
                                            <Input place={'??????????'} type={'text'} value={''} loading={loading} />
                                        </div>
                                        <div className='relative block'>
                                            <Input place={'?????????? ???? ???????????? ??????????'} type={'text'} value={''} loading={loading} />
                                        </div>
                                    </div>
                                    <div className="grid lg:grid-cols-3 gap-4 relative w-full mt-3">
                                        <div className='relative block'>
                                            <Input place={'???????? ???????????????? ?????????? ????????????'} type={'text'} inputMode={'number'} value={''} loading={loading} />
                                        </div>
                                        <div className='relative block'>
                                            <Select place={'?????????? ?? ???????????????????? ????'} value={returnproduct} onChange={setreturnproduct} data={[{ name: '?????????? ??????????' }, { name: '?????????? ????????????' }]} />
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
                                            <Input place={'???????? ?????? ???????? ????????????'} type={'text'} inputMode={'number'} value={''} loading={loading} />
                                        </div>
                                    </div>
                                    <div className="flex relative w-full mt-3">
                                        <FileUpload place={'?????? ?????? ???????? ???? ????????????'} />
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <CheckBox title={'???? ???????????? ???? ?? ?????????? ???????????? ???? ??????????????'} titlelink={'???????????? ?????? ???????? ???? ??????????????'} />
                                    </div>
                                    <div className='mt-6 w-full relative'>
                                        <Btn title={'????????????????'} onClick={submitHandler} />
                                    </div>

                                </div>
                            )}

                            {type && type.name == typeproduct[1].name && (
                                <div className='my-2 w-full'>
                                    <h1 className='w-full text-3xl my-10 text-brown dark:text-textdark sans-bolisher'>???????????? <span className='text-primary sans-bolisher'>{type.name}</span></h1>
                                    <div className="grid lg:grid-cols-3 gap-4 relative w-full mt-3">
                                        <div className='relative block'>
                                            <Input place={'?????? ?????????????? ???? ???????? ?????????? ??????????'} value={''} loading={loading} />
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
                                            {/* <Input place={'???????? ?????????? ???? ?????????? ???????? ???? ????????*'} value={''} loading={loading} /> */}
                                        </div>
                                        <div className='relative block'>
                                            <Input place={'???????? ????????'} value={''} inputMode={'number'} loading={loading} />
                                        </div>
                                    </div>
                                    <div className="grid lg:grid-cols-2 gap-4 relative w-full mt-3">
                                        <div className='relative block'>
                                            <Input place={'??????????'} type={'number'} value={''} loading={loading} />
                                        </div>
                                        <div className='relative block'>
                                            <Input place={'?????????? ??????'} value={''} inputMode={'number'} loading={loading} />
                                        </div>
                                    </div>
                                    <div className="grid lg:grid-cols-2 gap-4 relative w-full mt-3">
                                        <div className='relative block'>
                                            <Select place={'?????????? ????????'} value={statusproduct} onChange={setstatusproduct} data={[{ name: '????' }, { name: '?????? ??????' }]} />
                                        </div>
                                        <div className='relative block'>
                                            <Select place={'??????????????'} value={garantystatus} onChange={setgarantystatus} data={[{ name: '????????' }, { name: '??????????' }]} />
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
                                        <FileUpload place={'?????? ?????? ???????? ???? ????????????'} />
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <CheckBox title={'???? ???????????? ???? ?? ?????????? ???????????? ???? ??????????????'} titlelink={'???????????? ?????? ???????? ???? ??????????????'} />
                                    </div>
                                    <div className='mt-6 w-full relative'>
                                        <Btn title={'????????????????'} onClick={submitHandler} />
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
    { name: '????????' },
    { name: '??????????????' },
    { name: '?????????? ?????? ????????' },
    { name: '?????????? ??????????????????' },
]

const typeproduct = [
    { name: '?????????? ????' },
    { name: '??????????' },
    { name: '???????? ???? ????????' },
    { name: '???????? ???? ??????????' },
]

const typeCourseSee = [
    { name: '?????? ??????' },
    { name: '????????????' },
    { name: '??????????' },
]