import React from 'react'
import './index.css'

function Footer() {
    return (
        <footer className='flex justify-center items-center h-20 mx-4 sm:mx-0 text-center'>
            <p className='text-neutral-400'>Copyright &copy; {new Date().getFullYear()} Erik Hedlund. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer