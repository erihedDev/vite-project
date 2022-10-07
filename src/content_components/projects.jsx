import React from 'react'
import '../index.css'

function Projects() {
    return (
        <div id='projects' className='mx-4 sm:mx-0'>
            <h2 className='text-4xl mt-12 underline underline-offset-4 decoration-neutral-400 font-medium'>Projects</h2>

            <div className='flex flex-col-reverse sm:flex-row items-center w-full h-40 mt-48 sm:mt-12'>
                <div className='flex flex-col items-center sm:items-start sm:text-start w-full sm:w-3/5 h-full'>
                    <p className='text-2xl font-medium mt-4 sm:mt-0'>Frisör Saxé</p>
                    <p>Website for a hairdresser saloon.</p>
                    <a href={'https://ntig-uppsala.github.io/Frisor-Saxe/'} className='text-2xl text-center max-w-fit flex justify-center mt-4 mb-12 p-2 bg-orange-200 rounded-lg hover:bg-orange-300 duration-150 text-neutral-900'>Preview project</a>
                </div>
                <img src='/images/frisorsaxe.png' alt='image of project for Frisör Saxé' className='w-64 sm:w-2/5 h-40 object-cover rounded-lg'></img>
            </div>

            <div className='flex flex-col-reverse sm:flex-row items-center w-full h-40 mt-48 sm:mt-12'>
                <div className='flex flex-col items-center sm:items-start sm:text-start w-full sm:w-3/5 h-full'>
                    <p className='text-2xl font-medium mt-4 sm:mt-0'>Florist Blåklint</p>
                    <p>Website for a flower shop.</p>
                    <a href={'https://ntig-uppsala.github.io/florist-blaklinten/'} className='text-2xl text-center max-w-fit flex justify-center mt-4 mb-12 p-2 bg-orange-200 rounded-lg hover:bg-orange-300 duration-150 text-neutral-900'>Preview project</a>
                </div>
                <img src='/images/floristblaklint.png' alt='image of project for Florist Blåklint' className='w-64 sm:w-2/5 h-40 object-cover rounded-lg'></img>
            </div>
        </div>
    )
}

export default Projects