import React from 'react'
import { Backdrop, CircularProgress } from '@mui/material'

export default function Loading({handleClose , loading}) {
    return (
        <div className='z-[9999999]'>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
                onClick={handleClose}
                className={`w-full`}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}
