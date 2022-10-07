import React from 'react'
import '../index.css'

function Epitome() {
    return (
        <div className='mx-4 sm:mx-0'>
            <h2 className='text-4xl mt-12 underline underline-offset-4 decoration-neutral-400 font-bold'>Epitome</h2>
            <div className='flex flex-col items-start mt-6'>
                <p className='text-justify'>This portfolio was a project to learn about new methods beyond standard html, css and javascript that are used in creating web applications. <br/><br/> The main tools and libraries used to create this website are react, vite, tailwind css and three js. <br/><br/></p>
                <p>Credits to <a href='https://www.youtube.com/c/devaslife' className='font-medium text-orange-200 hover:text-orange-300'>Takuya Matsuyama</a> for the design inspration. <br/><br/></p>
                <p>This work is based on <a href='https://sketchfab.com/3d-models/voxel-lucky-cat-9635b45c72e748009a62ea7e562bbf27' className='font-medium text-orange-200 hover:text-orange-300'>"Voxel Lucky Cat"</a> by <a href='https://sketchfab.com/ln3d' className='font-medium text-orange-200 hover:text-orange-300'>LN3D</a> licensed under <a href='http://creativecommons.org/licenses/by/4.0/' className='font-medium text-orange-200 hover:text-orange-300'>CC-BY-4.0</a></p>
            </div>
        </div>
    )
}

export default Epitome