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
const App = () => {
  return (
    <>
   <BrowserRouter>
     
      <div className>
        <Header />
      </div>
      <div className="sidebar-container">
        <Sidebar />
        <Routes>
        <Route path="/" element={<CreateCollection />} />

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
      </Routes>
      </div>
     
     
    </BrowserRouter>
     </>
  )
}

export default App