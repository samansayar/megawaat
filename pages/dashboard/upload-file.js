import { Fragment, useEffect, useState } from 'react'
import { Listbox, RadioGroup, Transition } from '@headlessui/react'
import Header from '../../Layouts/Header'
import Input from '../../Components/Input'
import { useRouter } from 'next/router'
import Breadcrumb from '../../Components/Breadcrump'
import Data from '../../utils/res-util.json'
import Link from 'next/link'
import CheckBox from '../../Components/CheckBox'
import Btn from '../../Components/Btn'
import Loading from '../../Components/loading'

const categorySubRoot = [
    { name: 'کابل' },
    { name: 'ژنراتور' },
    { name: 'ترانس های قدرت' },
    { name: 'حفاظت الکترونیک' },
]

const typeCourse = [
    { name: 'رایگان' },
    { name: 'پولی' },
]

const typeCourseSee = [
    { name: 'ضبط شده' },
    { name: 'وبینار' },
    { name: 'حضوری' },
]


export default function UploadFile() {
    const [selected, setSelected] = useState(null)
    const [categorysubroot, setcategorysubroot] = useState(null)
    const [type, settype] = useState(null)
    const [typeSee, settypeSee] = useState(null)
    const [subselected, setSubselected] = useState([])
    const [selectsub, setselectsub] = useState()
    const [loading, setloading] = useState(false);

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
                        ['بارگذاری فایل', Data.link.upload.file]
                    ]} />
                    <div className='lg:text-[45px] text-2xl -z-40 lg:py-8 py-4 text-gray-900 dark:text-textdark'>
                        <p className='sans-bolisher lg:text-[45px] text-2xl'>بارگذاری فایل</p>
                    </div>
                    <div className={`pt-5 mt-5 border-t border-gray-300 pb-12`}>
                        <div className="w-full">
                            <div className="block relative w-full">
                                {/* <div className="relative">
                                    <input type="text" id="floating_outlined" className={`text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-white focus:bg-transparent border w-full border-gray-300 focus:outline-none focus:border-primary transition duration-200 peer`} placeholder=" " />
                                    <label htmlfor="floating_outlined" className="absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-focus:bg-wither focus:bg-wither dark:bg-gray-900 px-5 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-1 sans-bolish text-black">عنوان سوال</label>
                                </div> */}

                                <input
                                    // value={PhoneOREmail}
                                    disabled={loading}
                                    // onChange={(e) => setPhoneOREmail(e.target.value)}
                                    className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none focus:border-primary transition duration-200'
                                    type={'text'} placeholder="عنوان فایل" />
                            </div>
                            <div className="flex relative w-full  mt-3">
                                <textarea rows={4} disabled={loading}
                                    // onChange={(e) => setPhoneOREmail(e.target.value)}
                                    className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none focus:border-primary transition duration-200' placeholder="توضیحات مختصر"></textarea>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-4 relative w-full mt-3">
                                <Listbox value={categorysubroot} onChange={setcategorysubroot}>
                                    <div className="relative mt-1 w-full">
                                        <Listbox.Button className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none focus:border-primary flex justify-between items-center transition duration-200'>
                                            <span className="block truncate">{categorysubroot ? categorysubroot.name : 'دسته بندی تخصصی'}</span>
                                            <span className="pointer-events-none flex items-center pr-2">
                                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </span>
                                        </Listbox.Button>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className="absolute z-30 transition duration-200 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {categorySubRoot.map((person, personIdx) => (
                                                    <Listbox.Option
                                                        key={personIdx}
                                                        className={({ active }) =>
                                                            `relative transition duration-200 cursor-pointer 3elect-none py-2 pl-10 pr-4 ${active ? 'bg-primary/10 text-primary/80' : 'text-gray-900'
                                                            }`
                                                        }
                                                        value={person}
                                                    >
                                                        {({ selected }) => (
                                                            <>
                                                                <span
                                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                        }`}
                                                                >
                                                                    {person.name}
                                                                </span>
                                                                {/* {selected ? (
                                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                            </span>
                                                                        ) : null} */}
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </Listbox>
                                <Listbox value={type} onChange={settype}>
                                    <div className="relative mt-1 w-full">
                                        <Listbox.Button className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none focus:border-primary flex justify-between items-center transition duration-200'>
                                            <span className="block truncate">{type ? type.name : 'نوع پرداخت دوره'}</span>
                                            <span className="pointer-events-none flex items-center pr-2">
                                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </span>
                                        </Listbox.Button>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className="absolute z-30 transition duration-200 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {typeCourse.map((person, personIdx) => (
                                                    <Listbox.Option
                                                        key={personIdx}
                                                        className={({ active }) =>
                                                            `relative transition duration-200 cursor-pointer select-none py-3 pl-10 pr-4 ${active ? 'bg-primary/10 text-primary/80' : 'text-gray-900'
                                                            }`
                                                        }
                                                        value={person}
                                                    >
                                                        {({ selected }) => (
                                                            <>
                                                                <span
                                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                        }`}
                                                                >
                                                                    {person.name}
                                                                </span>
                                                                {/* {selected ? (
                                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                            </span>
                                                                        ) : null} */}
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </Listbox>
                            </div>
                        </div>
                        <div className="flex relative w-full mt-3">
                            <div className="flex flex-col items-start justify-start w-full">
                                <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg-gray-700 active:bg-primary/10 transition duration-200 ease dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-10 h-10 mb-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">                                        <small className="text-sm text-black my-3">بارگذاری فایل های ضمیمه</small></span> </p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <CheckBox title={'را خوانده ام و موارد مربوطه را میپذیرم'} titlelink={'قوانین بارگذاری فایل'} />
                        </div>
                        <div className='mt-6 w-full relative'>
                            <Btn title={'بارگذاری'} onClick={submitHandler} />
                        </div>

                    </div>
                </div>
            </div>
        </Header >
    )
}