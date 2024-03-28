import React from 'react'
import { motion } from 'framer-motion'
import './navbarr.css'
import Sidebar from '../sidebar/Sidebar'

export default function Navbarr() {
  return (
    <div className='navbar'>
      {/*Sidebar*/}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{opacity: 0, scale:0.5}} 
          animate={{opacity:1, scale:1}} 
          transition={{duration: 0.5}}
        >Oghenekaro</motion.span>
        <div className="social">
          <a href='#'><img src="/facebook.png" alt="" className='image'/></a>
          <a href='#'><img src="/linkedin.png" alt="" className='image'/></a>
          <a href='#'><img src="/twitter.png" alt="" className='image'/></a>
          <a href='#'><img src="/instagram.jpeg" alt="" className='image'/></a>
        </div>
      </div>
    </div>
  )
}
