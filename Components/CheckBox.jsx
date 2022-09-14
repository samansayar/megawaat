
import Link from 'next/link'
import React from 'react'

export default function checkBox({ titlelink, title, onChange }) {
    return (
        <div className='flex'>
            {/* <Checkbox id={title} onChange={onChange} />; */}
            <input type="checkbox" value="" className="w-4 h-4 text-priring-primary bg-white rounded-lg border-gray-300 focus:outline-none dark:bg-gray-600 dark:border-gray-600" />
            <label htmlfor={title} className="mx-2 sans-bolish flex text-sm justify-between items-center text-gray-900 dark:text-gray-300">
                <Link href="/terms">
                    <p className='text-primary sans-bolish hover:underline dark:text-blue-500'>{titlelink}</p>
                </Link>
                <span className="mx-1 text-gray-500 sans-bolish">
                    {title}
                </span>
            </label>
        </div>
    )
}
