import React from 'react'

export default function FileUpload({ place, onChange, value }) {
    return (
        <div className="flex flex-col items-start justify-start w-full">
            <label for={place} className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg-gray-700 active:bg-primary/10 transition duration-200 ease dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-10 h-10 mb-3 text-primary/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">
                            <small className="text-sm text-gray-600 my-3 sans-volish">{place}</small>
                        </span>
                    </p>
                </div>
                <input id={place} type="file" value={value} onChange={onChange} className="hidden" />
            </label>
        </div>
    )
}
