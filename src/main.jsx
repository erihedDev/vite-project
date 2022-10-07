import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header'
import Content from './content'
import Footer from './footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-zinc-900 h-full font-m-plus'>
    <Header/>
    <Content/>
    <Footer/>
  </div>
)
