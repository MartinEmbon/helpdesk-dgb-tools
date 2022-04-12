import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h3>Comandos Básicos</h3>
      <ul className='sidebar-menu'>
        <li><Link to="/mongodb/create">MongoDB</Link> </li>
        <li><Link to="/mysql/ddl">MySQL</Link> </li>
        <li><Link to="/mongodb/delete">Oracle</Link> </li>
        <li><Link to="/docker">Docker</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar