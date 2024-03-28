import React from 'react'
import './sidebar.css'
import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="bg">
        <Links />
      </div>
        <ToggleButton />
    </div>
  )
}
