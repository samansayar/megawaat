import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

export default function Select({ onChange, value, place, data }) {
    // console.log(data)
    return (
        <Listbox value={value} onChange={onChange}>
            <div className="relative w-full">
                <Listbox.Button className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none focus:border-primary flex justify-between items-center transition duration-200'>
                    <span className="block truncate">{value ? place + ' - ' + value.name : place}</span>
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
                        {data.map((person, personIdx) => (
                            <Listbox.Option
                                key={personIdx}
                                className={({ active }) =>
                                    `relative transition duration-200 cursor-pointer 3elect-none py-2 pl-10 pr-4 ${active ? 'bg-primary/10 text-primary/80' : 'text-gray-900'
                                    }`
                                }
                                value={person}
                            >
                                {({ value }) => (
                                    <>
                                        <span
                                            className={`block truncate ${value ? 'font-medium' : 'font-normal'
                                                }`}
                                        >
                                            {person.name}
                                        </span>
                                        {value ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
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