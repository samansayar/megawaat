import { Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

export default function Subdrop({ title, data }) {
    console.log(data)
    return (
        <>
            <Transition
                as={'div'}
                enter="transition ease-out duration-150"
                enterFrom="transform opacity-0 scale-75"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-75">
                {Object.keys(data).map((nav, index) => (
                    <Popover.Panel key={index} className="absolute right-0 top-0 transition ease-out duration-150 mt-8 w-64 divide-y divide-gray-200 dark:divide-gray-700 rounded-lg bg-white dark:bg-brown shadow ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="p-4">
                            {nav}
                        </div>
                    </Popover.Panel>
                ))}
            </Transition>
        </>

    )
}
