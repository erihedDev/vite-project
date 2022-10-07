import React from 'react'
import '../index.css'

function Aboutme() {
    return (
        <div id='aboutme' className='text-lg mx-4 sm:mx-0'>
            <h2 className='text-4xl mt-12 underline underline-offset-4 decoration-neutral-400 font-medium'>About me</h2>
            <h3 className='mt-8 mb-1 text-2xl font-medium'>Summary</h3>
            <p className='text-neutral-100 text-justify'>&nbsp; &nbsp;  My name is Erik Hedlund and I am a software development student from Sweden. I am currently studying a fourth year of high school where I get to work in projects in groups with other students while using common working practices. <br/> <br/> I have been programming for over three years and I have primarly worked with python and web development using html, css and javascript.</p>
            <div className='h-1 w-full bg-orange-200 rounded-sm mt-6'></div>
            <h3 className='mt-8 mb-1 text-2xl font-medium'>Timeline</h3>
            <p><span className='font-bold'>2019-2022</span> Studied information technology</p>
            <p><span className='font-bold'>2022-present</span> Studying as a high school engineer</p>
            <div className='h-1 w-full bg-orange-200 rounded-sm mt-6'></div>
            <h3 className='mt-8 mb-1 text-2xl font-medium'>Knowledge in development</h3>
            <p>HTML, CSS, Javascript, mySQL, Node.js, react, vite, tailwindcss, three.js. <br/><br/> Python and testing with selenium, lua, github.</p>
            <div className='h-1 w-full bg-orange-200 rounded-sm mt-6'></div>
        </div>
    )
}

export default Aboutme