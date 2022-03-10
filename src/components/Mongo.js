import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../App.css"
import CreateCollection from './MongoDB/CreateCollection'
import InsertRecords from './MongoDB/InsertRecords'
import UpdateRecords from './MongoDB/UpdateRecords'
import DeleteRecords from './MongoDB/DeleteRecords'
import FilterRecords from './MongoDB/FilterRecords'

const Mongo = () => {
    return (
        <div className='c-container'>
            <h1 style={{ textAlign: "center", padding: "12px 0" }}>Teste full</h1>
            <div className="whole-cards">
                <CreateCollection />
                <InsertRecords />
                <UpdateRecords />
                <DeleteRecords />
                <FilterRecords />
            </div>
        </div>
    )


}
export default Mongo