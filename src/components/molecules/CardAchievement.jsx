import React from 'react'

export default function CardAchievement() {
    return (
        <div className='w-full max-w-[80%] bg-gradient-to-r from-primary to-secondary rounded-lg text-white p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div className='col-span-1 flex flex-col justify-center items-center gap-2'>
                <h1 className='text-4xl lg:text-6xl font-bold'>10+</h1>
                <div>Years Experiences</div>
            </div>
            <div className='col-span-1 flex flex-col justify-center items-center gap-2'>
                <h1 className='text-4xl lg:text-6xl font-bold'>666+</h1>
                <div>Project Completed</div>
            </div>
            <div className='col-span-1 flex flex-col justify-center items-center gap-2'>
                <h1 className='text-4xl lg:text-6xl font-bold'>555+</h1>
                <div>Satisfied Client</div>
            </div>
            <div className='col-span-1 flex flex-col justify-center items-center gap-2'>
                <h1 className='text-4xl lg:text-6xl font-bold'>10+</h1>
                <div>Awards Achieved</div>
            </div>
        </div>
    )
}
