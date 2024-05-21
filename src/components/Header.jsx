import React from 'react'

export default function Header() {
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <a href="/"><h1 className='font-medium'>Free<span className='text-blue-400 bold'>Script</span></h1></a>
            <div className='gap-4 flex items-center '>
                <a href="/" className='flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-blue-400'>
                    <p className='font-semibold'>New</p>
                    <i className="fa-solid fa-plus"></i>
                </a>
                <div><button className='flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-blue-400 font-semibold'>My LinkedIn</button>
                </div>
            </div>
        </header>
    )
}