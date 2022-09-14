import React from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Btn({onClick , title}) {
    return (
        <>
        <Button onClick={onClick} className='bg-primary py-4 w-full h-[56px] rounded-xl space-x-3 flex justify-center items-center'
         variant="contained" startIcon={<SendIcon />}>
            <div></div>
            <span className='sans-bolish text-white'>{title}</span>
        </Button>
        </>
    )
}
