import React from 'react'
import '../index.css'

function Projects() {
    const props = [
        {
            title: 'Frisör Saxé',
            description: 'Basic website for a hairdresser saloon.',
            link: 'https://ntig-uppsala.github.io/Frisor-Saxe/',
            image: '/images/frisorsaxe.png',
            imageDesc: 'image of project for Frisör Saxé'
        },
        {
            title: 'Florist Blåklint',
            description: 'Basic website for a flower shop.',
            link: 'https://ntig-uppsala.github.io/florist-blaklinten/',
            image: '/images/floristblaklint.png',
            imageDesc: 'image of project for Florist Blåklint'
        },
        {
            title: 'Lunchpad-py',
            description: 'A blip system for students to check in when they eat lunch, made with python.',
            link: null,
            image: '/images/ntig-logo.jpg',
            imageDesc: 'image of project for lunchpad-py'
        },  
        {
            title: 'Elevhalsa-skylt',
            description: 'A digital sign for information about school personal, such as contact information and availability.',
            link: null,
            image: '/images/project-screen.jpg',
            imageDesc: 'image of NTI Gymnasiet logo' 
        },  
        {
            title: 'Hotel-kassasystem',
            description: 'A booking and payment system for a hotel, made in C#',
            link: 'https://github.com/NTIG-Uppsala/hotell-kassasystem',
            image: '/images/kassasystem.png',
            imageDesc: 'image of project for Hotel-kassasystem'
        },  
        {
            title: 'Borgerlig vigsel',
            description: 'Prototype for a booking system for weddings at Uppsala kommun, made using react js.',
            link: null,
            image: '/images/ua-logo.png',
            imageDesc: 'image of uppsala kommun logo'
        },  
        {
            title: 'Formulärssvarshantering',
            description: 'Internal website at Uppsala kommun for handling responses from forms.',
            link: null,
            image: '/images/ua-logo.png',
            imageDesc: 'image of uppsala kommun logo'
        },  
    ]

    function Project(props) {
        return (
            <div className='flex flex-col-reverse sm:flex-row items-center w-full h-40 mt-48 sm:mt-12'>
                <div className='flex flex-col items-center sm:items-start sm:text-start w-full sm:w-3/5 h-full'>
                    <p className='text-2xl font-medium mt-4 sm:mt-0'>{props.title}</p>
                    <p>{props.description}</p>
                    <a href={props.link} className='text-xl text-center max-w-fit flex justify-center mt-4 mb-12 py-2 px-4 rounded-lg bg-orange-200 hover:bg-orange-300 duration-150 text-neutral-900'>{props.link ? 'Preview project' :'No preview'}</a>
                </div>
                <img src={props.image} alt={props.imageDesc} className='w-64 sm:w-2/5 h-40 object-cover rounded-lg'></img>
            </div>
        )
    }

    return (
        <div id='projects' className='mx-4 sm:mx-0'>
            <h2 className='text-4xl mt-12 underline underline-offset-4 decoration-neutral-400 font-medium'>Projects</h2>

            {props.map((project) => (
                <Project 
                    key={project.title}
                    title={project.title} 
                    description={project.description} 
                    link={project.link} 
                    image={project.image} 
                />
            ))}
        </div>
    )
}

export default Projects