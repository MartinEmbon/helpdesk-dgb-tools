import React from 'react'
import Header from './components/Header'
import Mongo from "./components/Mongo"
import Sidebar from "./components/Sidebar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateCollection from './components/MongoDB/CreateCollection'
import InsertRecords from './components/MongoDB/InsertRecords'
import DeleteRecords from './components/MongoDB/DeleteRecords'
import FilterRecords from './components/MongoDB/FilterRecords'
import UpdateRecords from './components/MongoDB/UpdateRecords'
import FilterIn from './components/MongoDB/FilterIn'
import FilterOr from './components/MongoDB/FilterOr'
import FilterGtLt from './components/MongoDB/FilterGtLt'
import SortLimit from './components/MongoDB/SortLimit'
import Docker from "./components/Docker/Docker"

import MySQLDCL from "./components/MySQL/comandosDCL"
import MySQLDDL from "./components/MySQL/comandosDDL"
import MySQLDML from "./components/MySQL/comandosDML"
import MySQLTCL from "./components/MySQL/comandosTCL"
import MySQLOperadores from "./components/MySQL/operadoresLogicos"
import MySQLSelect from "./components/MySQL/comandosSelect"
import MySQLCase from "./components/MySQL/comandoCase"
import MySQLJoin from "./components/MySQL/comandoJoin"
import MySQLSub from "./components/MySQL/subconsultas"
import MySQLLimit from "./components/MySQL/comandosLimit"
import MySQLGroup from "./components/MySQL/comandosGroupBy"
const App = () => {
  return (
    <BrowserRouter>
      <div className>
        <Header />
      </div>
      <div className="sidebar-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<CreateCollection />} />
          <Route path="/docker" element={<Docker />} />

          <Route path="/mongodb/create" element={<CreateCollection />} />
          <Route path="/mongodb/insert" element={<InsertRecords />} />
          <Route path="/mongodb/delete" element={<DeleteRecords />} />
          <Route path="/mongodb/filter" element={<FilterRecords />} />
          <Route path="/mongodb/update" element={<UpdateRecords />} />
          <Route path="/mongodb/sort" element={<SortLimit />} />
          <Route path="/mongodb/in" element={<FilterIn />} />
          <Route path="/mongodb/or" element={<FilterOr />} />
          <Route path="/mongodb/gt" element={<FilterGtLt />} />
          <Route path="/mongodb/push" element={<FilterRecords />} />
          <Route path="/mongodb/foreach" element={<UpdateRecords />} />

          <Route path="/mysql/ddl" element={<MySQLDDL />} />
          <Route path="/mysql/dml" element={<MySQLDML />} />
          <Route path="/mysql/dcl" element={<MySQLDCL />} />
          <Route path="/mysql/tcl" element={<MySQLTCL />} />
          <Route path="/mysql/oplogicos" element={<MySQLOperadores />} />
          <Route path="/mysql/select" element={<MySQLSelect />} />
          <Route path="/mysql/case" element={<MySQLCase />} />
          <Route path="/mysql/join" element={<MySQLJoin />} />
          <Route path="/mysql/subconsultas" element={<MySQLSub />} />
          <Route path="/mysql/limit" element={<MySQLLimit />} />
          <Route path="/mysql/group" element={<MySQLGroup />} />

        </Routes>
      </div>


    </BrowserRouter>

  )
}

export default App