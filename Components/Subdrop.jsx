import { Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

export default function Subdrop({title,data}) {
    // console.log([0]);
    return (
        <>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="transform opacity-0 scale-75"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-75">
                <Popover.Panel className="absolute right-0 top-0 transition ease-out duration-150 mt-8 w-64 divide-y divide-gray-200 dark:divide-gray-700 rounded-lg bg-white dark:bg-brown shadow ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-4">
                        <Popover>
                            <Popover.Button className={`text-gray-700 hover:text-gray-900 transition duration-150 text-xs font-medium flex justify-center items-center focus:outline-none focus:border-none`}>
                                <span className="mr-1 sans-bolish text-gray-500">{title}</span>
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-150"
                                enterFrom="transform opacity-0 scale-75"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-75">
                                <Popover.Panel className="transition mt-2 ease-out duration-150 w-full rounded-lg bg-transparent focus:outline-none">
                                    <div className="p-1">
                                        {Object.keys(data).map((item, index) => (
                                            <div key={index} className="flex hover:text-primary text-gray-700 group px-3 py-3 w-full justify-start items-cente rw-full rounded-lg transition duration-200 ease hover:bg-primary/10">
                                                <span className={`mr-2 sans-bolish text-sm`}>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>
                    </div>
                </Popover.Panel>
            </Transition>
        </>

    )
}
