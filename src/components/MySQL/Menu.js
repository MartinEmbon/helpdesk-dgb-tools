import React from 'react'
import { Link } from 'react-router-dom'
const MongoMenu = () => {
    return (
        <div className='topbar'>
            <div className="comandos_basicos">
                <h3>Comandos Básicos</h3>
                <ul className='sidebar-menu'>
                    <li><Link to="/mysql/ddl">Data Definition Language - DDL</Link> </li>
                    <li><Link to="/mysql/dml">Data Manipulation Language - DML</Link> </li>
                    <li><Link to="#">Data Control Language - DCL (coming soon...)</Link> </li>
                    <li><Link to="/mysql/tcl">Transaction Control Language TCL</Link> </li>
                    <li><Link to="/mysql/select">Select - Distinct - Having</Link> </li>
                    <li><Link to="/mysql/limit">Paginação (Limit) e Order By</Link> </li>
                </ul>
            </div>
            <div className="filtros">
                <h3>Operadores Lógicos</h3>
                <ul className='sidebar-menu'>
                    <li><Link to="/mysql/oplogicos">Operadores Lógicos</Link> </li>
                    <li><Link to="/mysql/funcoes">Funções</Link> </li>
                    <li><Link to="/mysql/globals">Variaveis globais</Link> </li>
                </ul>
              
            </div>
            <div className="links">
            <h3>Comandos Intermediarios</h3>
                <ul className='sidebar-menu2'>
                   <div className="left">
                   <li><Link to="/mysql/case">Case (When/Else)</Link> </li>
                    <li><Link to="/mysql/join">Join</Link> </li>
                    <li><Link to="/mysql/subconsultas">Subconsultas</Link> </li>
                   </div>
                   <div className="right">
                   <li><Link to="/mysql/group">Group By</Link> </li>
                    {/* <li><Link to="/mysql/commit-e-rollback">Commit e Rollback</Link> </li> */}
                    <li><Link to="/mysql/trigger">Trigger</Link> </li>
                   </div>
                </ul>
            </div>
        </div>
    )
}

export default MongoMenu