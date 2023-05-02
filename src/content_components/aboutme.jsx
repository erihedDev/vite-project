import React from 'react'
import '../index.css'

function Aboutme() {
    const props = [
        {
            timespan: '2019-2022',
            text: 'Studied information technology during high school, mostly focusing on programming with python and fullstack web development.'
        },
        {
            timespan: '2022-2023',
            text: 'Studying as a high school engineer where I worked on projects in groups with other students while learning about using common working practices.'
        },
        {
            timespan: 'Feb 2023-May 2023',
            text: 'While studying as a high school engineer I had a 10 week internship at Uppsala kommuns webteam. I worked alongside the the team and helped with developing a prototype and an internal website that is currently used by many people at uppsala kommun.'
        }
    ]

    function Timeline(props) {
        return (
            <p className='mb-8'><span className='font-bold'>{props.timespan}</span> {props.text}</p>

        )
    }

    return (
        <div id='aboutme' className='text-lg mx-4 sm:mx-0'>
            <h2 className='text-4xl mt-12 underline underline-offset-4 decoration-neutral-400 font-medium'>About me</h2>
            <h3 className='mt-8 mb-1 text-2xl font-medium'>Summary</h3>
            <p className='text-neutral-100 text-justify'>&nbsp; &nbsp;  My name is Erik Hedlund and I am a software development student from Sweden. I am currently studying a fourth year of high school where I get to work in projects in groups with other students while using common working practices. <br/> <br/> I have been programming for over three years and I have primarly worked with python and web development using html, css and javascript.</p>
            <div className='h-1 w-full bg-orange-200 rounded-sm mt-6'></div>
            <h3 className='mt-8 mb-1 text-2xl font-medium'>Timeline</h3>
            {props.map((timeline, keyx) => (
                <Timeline key={keyx} timespan={timeline.timespan} text={timeline.text}/>
            ))}
            <div className='h-1 w-full bg-orange-200 rounded-sm mt-6'></div>
            <h3 className='mt-8 mb-1 text-2xl font-medium'>Knowledge in development</h3>
            <p>HTML, CSS, Javascript, mySQL, Node.js, react, vite, tailwindcss, three.js. <br/><br/> Python and testing with selenium, lua, github, C#.</p>
            <div className='h-1 w-full bg-orange-200 rounded-sm mt-6'></div>
        </div>
    )
}

export default Aboutme