import React from 'react'
import { Link } from 'react-router-dom'
const MongoMenu = () => {
    return (
        <div className='topbar'>
            <div className="comandos_basicos">
                <h3>Comandos Básicos</h3>
                <ul className='sidebar-menu'>
                    <li><Link to="/mysql/ddl">Comandos DDL</Link> </li>
                    <li><Link to="/mysql/dml">Comandos DML</Link> </li>
                    <li><Link to="/mysql/dcl">Comandos DCL (coming soon...)</Link> </li>
                    <li><Link to="/mysql/tcl">Comandos TCL (coming soon...)</Link> </li>
                    <li><Link to="/mysql/select">Select - Distinct - Having</Link> </li>
                    <li><Link to="/mysql/limit">Paginação (Limit) e Order By</Link> </li>
                </ul>
            </div>
            <div className="filtros">
                <h3>Operadores Lógicos</h3>
                <ul className='sidebar-menu'>
                    <li><Link to="/mysql/oplogicos">Operadores Lógicos</Link> </li>
                </ul>
                <h3>Comandos Intermediarios</h3>
                <ul className='sidebar-menu2'>
                   <div className="left">
                   <li><Link to="/mysql/case">Case (When/Else)</Link> </li>
                    <li><Link to="/mysql/join">JOIN</Link> </li>
                    <li><Link to="/mysql/subconsultas">Subconsultas</Link> </li>
                   </div>
                   <div className="right">
                   <li><Link to="/mysql/group">Group By</Link> </li>
                    <li><Link to="/mysql/join">JOIN</Link> </li>
                    <li><Link to="/mysql/subconsultas">Subconsultas</Link> </li>
                   </div>
                </ul>
            </div>
            <div className="links">
                <h3>Links de interés</h3>
                <ul className='sidebar-menu'>
                    <li><a target="_blank" href="https://docs.mongodb.com/manual/">Mongo Reference Manual</a> </li>
                    <li><a target="_blank" href="https://cursos.alura.com.br/course/mongodb">MongoDB no Alura</a> </li>
                    <li><a target="_blank" href="https://www.mongodb.com/try/download/compass">MongoDB Compass Download</a> </li>
                </ul>
            </div>
        </div>
    )
}

export default MongoMenu