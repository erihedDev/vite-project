import React from 'react'
import './index.css'

import Introduction from './content_components/introduction'
import Aboutme from './content_components/aboutme'
import Projects from './content_components/projects'
import Contact from './content_components/contact'
import Epitome from './content_components/epitome'

import Model from './model'

function Content() {
    return (
        <div className='flex justify-center w-full'>
            <div className='w-full sm:w-[32rem] h-full mt-20 text-neutral-50'>
                <Model/>
                <Introduction/>
                <Aboutme/>
                <Projects/>
                <Contact/>
                <Epitome/>
            </div>
        </div>
    )
}

export default Content