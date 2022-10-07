import React from 'react'
import '../index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div id='contact' className='mx-4 sm:mx-0'>
            <h2 className='text-4xl mt-12 underline underline-offset-6 decoration-neutral-400 font-medium'>Contact</h2>
            <div className='flex flex-col items-start mt-6'>
                <a href={'https://github.com/erihedDev'} className='mt-1 text-xl text-orange-200 p-2 rounded-md hover:bg-orange-300 hover:bg-opacity-40 duration-150'><FontAwesomeIcon icon={faGithub}/>&nbsp; erihedDev</a>
                <a href={'https://www.linkedin.com/in/erik-hedlund-a5921624a/'} className='mt-1 text-xl text-orange-200 p-2 rounded-md hover:bg-orange-300 hover:bg-opacity-40 duration-150'><FontAwesomeIcon icon={faLinkedin}/>&nbsp; erik-hedlund</a>
                <a href={'tel:0703838783'} className='mt-1 text-xl text-orange-200 p-2 rounded-md hover:bg-orange-300 hover:bg-opacity-40 duration-150'><FontAwesomeIcon icon={faPhone}/>&nbsp; 070-383 87 83</a>
                <a href={'mailto:erik.hedlund@elev.ga.ntig.se'} className='mt-1 text-xl text-orange-200 p-2 rounded-md hover:bg-orange-300 hover:bg-opacity-40 duration-150'><FontAwesomeIcon icon={faEnvelope}/>&nbsp; erik.hedlund6@gmail.com</a>
            </div>
        </div>
    )
}

export default Contact