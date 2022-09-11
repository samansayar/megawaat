import { Fragment, useEffect, useState } from 'react'
import { Listbox, RadioGroup, Transition } from '@headlessui/react'
import Header from '../../Layouts/Header'
import Input from '../../Components/Input'

const plans = [
    {
        name: 'آکادمی مهندسی',
        desc: 'ثبت دوره آموزشی - بارگذاری مقاله - ثبت ایده و تجربه - ثبت سوال - بارگذاری فایل',
    },
    {
        name: 'کالا و تجهیزات',
        desc: 'ثبت کالا یا تجیهزات',
    },
    {
        name: 'مهندسان خبره',
        desc: 'ایجاد پروژه - ایجاد مسابقه',
    },
]

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


export default function Upload() {
    const [selected, setSelected] = useState(null)
    const [categorysubroot, setcategorysubroot] = useState(null)
    const [type, settype] = useState(null)
    const [typeSee, settypeSee] = useState(null)
    const [loading, setloading] = useState(false)
    const [subselected, setSubselected] = useState([])
    const [selectsub, setselectsub] = useState(null)
    // useEffect(() => {
    //     if (selected?.desc.includes('-')) {
    //         var split = selected?.desc.split('-');
    //         console.log(split)
    //     } else {
    //         console.log(selected?.desc)
    //     }
    // }, [selected])
    useEffect(() => {
        console.log(selectsub)
    }, [selectsub])
    useEffect(() => {
        var split = selected?.desc?.split('-');
        setSubselected(split);
    }, [selected])

    return (
        <Header title={'ایجاد و بارگذاری - مگاوات'}>
            <div className='lg:pt-32 lg:px-52 pt-20 pb-40 z-40 w-full'>
            
                <div className="mx-auto lg:px-0 px-6 transition-all duration-200 ease-in-out">
                    <div className='lg:text-[45px] text-2xl -z-40 lg:py-8 py-4 text-gray-900 dark:text-textdark'>
                        <span className='sans-bolisher lg:text-[45px] text-2xl'>ایجاد و بارگذاری  </span>

                    </div>
                    <div className="mt-8 pb-10">
                        <RadioGroup value={selected} onChange={setSelected}>
                            <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                            <div className="grid w-full md:grid-cols-3 gap-6">
                                {plans.map((plan) => (
                                    <RadioGroup.Option
                                        key={plan.name}
                                        value={plan}
                                        className={({ active, checked }) =>
                                            `${active ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-primary' : ''}
                                            ${checked ? 'bg-primary  text-white' : 'bg-white'} relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none border border-gray-300`
                                        }
                                    >
                                        {({ active, checked }) => (
                                            <>
                                                <div className="flex w-full items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="text-sm">
                                                            <RadioGroup.Label
                                                                as="p"
                                                                className={`sans-bolisher  ${checked ? 'text-white' : 'text-gray-800'
                                                                    }`}
                                                            >
                                                                {plan.name}
                                                            </RadioGroup.Label>
                                                            <RadioGroup.Description
                                                                as="span"
                                                                className={`inline ${checked ? 'text-blue-100' : 'text-gray-500'
                                                                    }`}
                                                            >
                                                                <span className='mt-2 text-[10px] sans-bolish'>
                                                                    {plan.desc.split('-').slice(0, 3).join('-') + '....'}
                                                                </span>{' '}
                                                            </RadioGroup.Description>
                                                        </div>
                                                    </div>
                                                    {checked && (
                                                        <div className="shrink-0 text-white">
                                                            <CheckIcon className="h-8 w-8" />
                                                        </div>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>
                    </div>
                    {/* Step 2 */}
                    <div className={`mt-1 transition-all duration-200 ease-in-out  ${selected ? 'block' : 'hidden'}`}>
                        <div className='lg:text-[45px] text-2xl -z-40 lg:py-8 py-4 text-gray-900 dark:text-textdark'>
                            <span className='sans-bolisher lg:text-[35px] text-2xl'>زیر شاخه های </span>
                            {selected ? <span className='lg:text-[30px] text-2xl text-primary sans-bolisher font-black w-full'>{selected.name}</span> : <span className='lg:text-[35px] text-2xl text-gray-600 sans-bolisher font-black w-full'>......</span>}
                        </div>
                        <div className={`mt-10 pb-12`}>
                            <RadioGroup value={selectsub} onChange={setselectsub}>
                                <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                                <div className="grid w-full md:grid-cols-3 gap-6">
                                    {subselected ? (
                                        <>
                                            {
                                                subselected.map((plan, index) => (
                                                    <RadioGroup.Option
                                                        key={index}
                                                        value={plan}
                                                        className={({ active, checked }) =>
                                                            `${active ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-primary' : ''}
                                            ${checked ? 'bg-primary  text-white' : 'bg-white'} relative flex cursor-pointer rounded-lg px-5 py-3 shadow-sm focus:outline-non border border-gray-300`
                                                        }
                                                    >
                                                        {({ active, checked }) => (
                                                            <>
                                                                <div className="flex w-full items-center justify-between">
                                                                    <div className="flex items-center">
                                                                        <div className="text-sm">
                                                                            <RadioGroup.Label
                                                                                as="p"
                                                                                className={`sans-bolisher py-3  ${checked ? 'text-white' : 'text-gray-800'
                                                                                    }`}
                                                                            >
                                                                                {plan}
                                                                            </RadioGroup.Label>
                                                                        </div>
                                                                    </div>
                                                                    {checked && (
                                                                        <div className="shrink-0 text-white">
                                                                            <CheckIcon className="h-8 w-8" />
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </>
                                                        )}
                                                    </RadioGroup.Option>
                                                ))
                                            }
                                        </>
                                    ) : (
                                        <>
                                            <RadioGroup.Option
                                                key={selected?.name}
                                                value={selected}
                                                className={({ active, checked }) =>
                                                    `${active ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-primary' : ''}
                                            ${checked ? 'bg-primary  text-white' : 'bg-white'} relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none border border-gray-300`
                                                }
                                            >
                                                {({ active, checked }) => (
                                                    <>
                                                        <div className="flex w-full items-center justify-between">
                                                            <div className="flex items-center">
                                                                <div className="text-sm">
                                                                    <RadioGroup.Label
                                                                        as="p"
                                                                        className={`sans-bolisher  ${checked ? 'text-white' : 'text-gray-800'
                                                                            }`}
                                                                    >
                                                                        {selected?.name}
                                                                    </RadioGroup.Label>
                                                                    <RadioGroup.Description
                                                                        as="span"
                                                                        className={`inline ${checked ? 'text-blue-100' : 'text-gray-500'
                                                                            }`}
                                                                    >
                                                                        <span className='mt-2 text-[10px] sans-bolish'>
                                                                            {selected?.desc}
                                                                        </span>{' '}
                                                                    </RadioGroup.Description>
                                                                </div>
                                                            </div>
                                                            {checked && (
                                                                <div className="shrink-0 text-white">
                                                                    <CheckIcon className="h-8 w-8" />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </>
                                                )}
                                            </RadioGroup.Option>
                                        </>
                                    )}
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                    {selectsub === 'ثبت دوره آموزشی ' && (
                        <div className={`pt-5 mt-5 border-t border-gray-300 pb-12`}>
                            <div className="w-full">
                                <div className="grid lg:grid-cols-2 gap-4 relative w-full">
                                    <input
                                        // value={PhoneOREmail}
                                        disabled={loading}
                                        // onChange={(e) => setPhoneOREmail(e.target.value)}
                                        className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none focus:border-primary transition duration-200'
                                        type={'text'} placeholder="عنوان دوره" />
                                    <Listbox value={typeSee} onChange={settypeSee}>
                                        <div className="relative mt-1 w-full">
                                            <Listbox.Button className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none focus:border-primary flex justify-between items-center transition duration-200'>
                                                <span className="block truncate">{typeSee ? typeSee.name : 'نوع دیدن دوره'}</span>
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
                                                    {typeCourseSee.map((person, personIdx) => (
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
                                <div className="flex relative w-full  mt-3">
                                    <textarea rows={4} disabled={loading}
                                        // onChange={(e) => setPhoneOREmail(e.target.value)}
                                        className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none focus:border-primary transition duration-200' placeholder="توضیحات مختصر دوره"></textarea>
                                </div>
                                <div className="grid gap-4 lg:grid-cols-3 relative w-full mt-3">
                                    <Listbox value={categorysubroot} onChange={setcategorysubroot}>
                                        <div className="relative mt-1 w-full">
                                            <Listbox.Button className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none focus:border-primary flex justify-between items-center transition duration-200'>
                                                <span className="block truncate">{categorysubroot ? categorysubroot.name : 'دسته بندی تخصص'}</span>
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
                                    <input
                                        // value={PhoneOREmail}
                                        disabled={loading}
                                        // onChange={(e) => setPhoneOREmail(e.target.value)}
                                        className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none focus:border-primary transition duration-200'
                                        type={'text'} placeholder="مدت زمان دوره (مثال  2:00:00)" />
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
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">                                        <small className="text-sm text-black my-3 sans-bolish">عکس پیش نمایش دوره</small></span> </p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>
                        </div>

                    )}
                    {selectsub === ' بارگذاری مقاله ' && (
                        <div className={`pt-5 mt-5 border-t border-gray-300 pb-12`}>
                            <div className="w-full">
                                <div className="block relative w-full">
                                    <input
                                        // value={PhoneOREmail}
                                        disabled={loading}
                                        // onChange={(e) => setPhoneOREmail(e.target.value)}
                                        className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none focus:border-primary transition duration-200'
                                        type={'text'} placeholder="عنوان مقاله" />
                                </div>
                                <div className="flex relative w-full  mt-3">
                                    <textarea rows={4} disabled={loading}
                                        // onChange={(e) => setPhoneOREmail(e.target.value)}
                                        className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none focus:border-primary transition duration-200' placeholder="توضیحات مختصر مقاله"></textarea>
                                </div>
                                <div className="grid gap-4 lg:grid-cols-2 relative w-full mt-3">
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
                            <div className="block relative w-full mt-3">
                                <Listbox value={type} onChange={settype}>
                                    <div className="relative mt-1 w-full">
                                        <Listbox.Button className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none focus:border-primary flex justify-between items-center transition duration-200'>
                                            <span className="block truncate">{type ? type.name : 'نوع مقاله'}</span>
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
                            </div>
                            <div className="flex relative w-full mt-3">
                                <div className="flex flex-col items-start justify-start w-full">
                                    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg-gray-700 active:bg-primary/10 transition duration-200 ease dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-10 h-10 mb-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">                                        <small className="text-sm text-black my-3 sans-bolish">عکس پیش نمایش مقاله</small></span> </p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>
                        </div>

                    )}
                    {selectsub === ' ثبت ایده و تجربه ' && (
                        <div className={`pt-5 mt-5 border-t border-gray-300 pb-12`}>
                            <div className="w-full">
                                <div className="block relative w-full">
                                    <input
                                        // value={PhoneOREmail}
                                        disabled={loading}
                                        // onChange={(e) => setPhoneOREmail(e.target.value)}
                                        className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none focus:border-primary transition duration-200'
                                        type={'text'} placeholder="عنوان" />
                                </div>
                                <div className="flex relative w-full  mt-3">
                                    <textarea rows={4} disabled={loading}
                                        // onChange={(e) => setPhoneOREmail(e.target.value)}
                                        className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none focus:border-primary transition duration-200' placeholder="توضیحات مختصر"></textarea>
                                </div>
                                <div className="block relative w-full mt-3">
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
                                </div>
                            </div>
                            <div className="flex relative w-full mt-3">
                                <div className="flex flex-col items-start justify-start w-full">
                                    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg-gray-700 active:bg-primary/10 transition duration-200 ease dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-10 h-10 mb-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">                                        <small className="text-sm text-black my-3 sans-bolish">عکس پیش نمایش مقاله</small></span> </p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>
                        </div>

                    )}
                    {selectsub === ' ثبت سوال ' && (
                        <div className={`pt-5 mt-5 border-t border-gray-300 pb-12`}>
                            <div className="w-full">
                                <div className="block relative w-full">
                                    <input
                                        // value={PhoneOREmail}
                                        disabled={loading}
                                        // onChange={(e) => setPhoneOREmail(e.target.value)}
                                        className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none focus:border-primary transition duration-200'
                                        type={'text'} placeholder="عنوان سوال" />
                                </div>
                                <div className="flex relative w-full  mt-3">
                                    <textarea rows={4} disabled={loading}
                                        // onChange={(e) => setPhoneOREmail(e.target.value)}
                                        className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none focus:border-primary transition duration-200' placeholder="متن سوال"></textarea>
                                </div>
                                <div className="block relative w-full mt-3">
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
                                </div>
                            </div>
                            <div className="flex relative w-full mt-3">
                                <div className="flex flex-col items-start justify-start w-full">
                                    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg-gray-700 active:bg-primary/10 transition duration-200 ease dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-10 h-10 mb-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">                                        <small className="text-sm text-black my-3 sans-bolish">بارگذاری فایل های ضمیمه</small></span> </p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </Header >
    )
}

function CheckIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
