import React from 'react'
import '../index.css'

function Introduction() {
    return (
        <div className='flex justify-between  mx-4 sm:mx-0'>
            <div>
                <h2 className='text-4xl font-bold'>Erik Hedlund</h2>
                <p className='text-lg font-medium'>Software development student</p>
            </div>
            <div>
                <p>some image</p>
            </div>
        </div>
    )
}

export default Introduction