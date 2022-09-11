import React from 'react'
import Link from 'next/link';

export default function NavItem({ children, title, route , className}) {
    return (
        <Link href={route}>
            <button className={`${className} text-gray-400 hover:text-gray-800 transition duration-150 text-xs font-medium flex justify-center items-center`}>
                <span>
                    {children}
                </span>
                <span className="mr-1 sans-bolish">{title}</span>
            </button>
        </Link>
    )
}
