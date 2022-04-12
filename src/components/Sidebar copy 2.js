import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import "./MongoDB/CreateCollection"
import CreateCollection from './MongoDB/CreateCollection'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h3>Comandos Básicos</h3>
      <ul className='sidebar-menu'>
        <li><Link to="/mongodb/create">Criar e Deletar uma coleção</Link> </li>
        <li><Link to="/mongodb/insert">Inserir registros</Link> </li>
        <li><Link to="/mongodb/delete">Apagar registros</Link> </li>
        <li><Link to="/mongodb/filter">Filtrar registros</Link> </li>
        <li><Link to="/mongodb/update">Atualizar registros</Link> </li>
        <li><Link to="/mongodb/sort">Ordenar e Limitar registros</Link> </li>
      </ul>
      <h3>Filtros especiais</h3>
      <ul className='sidebar-menu'>
        <li><Link to="/mongodb/in">$in</Link> </li>
        <li><Link to="/mongodb/or">$or</Link> </li>
        <li><Link to="/mongodb/gt">$gt - $lt</Link> </li>
        {/* <li><Link to="/mongodb/push">$push</Link> </li> */}
        {/* <li><Link to="/mongodb/foreach">$foreach</Link> </li> */}
      </ul>
      <h3>Links de interés</h3>
      <ul className='sidebar-menu'>
        <li><a target="_blank" href="https://docs.mongodb.com/manual/">Mongo Reference Manual</a> </li>
        <li><a target="_blank" href="https://cursos.alura.com.br/course/mongodb">MongoDB no Alura</a> </li>
        <li><a target="_blank" href="https://www.mongodb.com/try/download/compass">MongoDB Compass Download</a> </li>
      </ul>
    </div>
  )
}

export default Sidebar