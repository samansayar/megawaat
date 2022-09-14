import React from "react";

export default function Input({
    value,
    place,
    type = "text",
    onChange = () => { },
    loading = false,
    inputMode = false
}) {
    return (
        <input
            inputMode={inputMode}
            value={value}
            disabled={loading}
            onChange={onChange}
            className='text-sm sans-bolish placeholder:text-black
             dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none
              focus:border-primary transition duration-200'
            type={type} placeholder={place} />
    );
}
