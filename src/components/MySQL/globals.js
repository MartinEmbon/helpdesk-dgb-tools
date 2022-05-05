import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Alert } from 'react-bootstrap'
import "../../App.css"
import MongoMenu from './Menu'

const InsertRecords = () => {
  return (
    <div className="c-container">
      <MongoMenu />
      <div className="card-container">

        <div className="my-card">
          <Card>
            <Card.Header>Globals</Card.Header>
            <Card.Body>
              <Card.Title>Error solutions</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>SHOW GLOBAL STATUS LIKE 'Created_tmp_disk_tables';</p>
                  <p>SHOW GLOBAL STATUS LIKE 'Created_tmp_tables';</p>
                  <p>SHOW GLOBAL VARIABLES LIKE 'tmp_table_size';</p>
                  <p>SET GLOBAL tmp_table_size = 208003328;</p>
                  <p>CREATE TABLE DEFAULT_TABLE2 (ID INTEGER, NOME VARCHAR(100)) ENGINE = MEMORY;</p>
                  <p>SHOW VARIABLES WHERE Variable_Name like '$dir';</p>
                  <p>mysqldump -uroot -p --databases BANCODB --ignore-table BANCODB.TABELA3</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>


      </div>


      <div className="alert">


        <Alert variant="success">
          <Alert.Heading>Documentação MongoDB</Alert.Heading>
          <hr />
          <p className="mb-0">
            <p>datadir: variável de ambiente que determina a localização de onde a base de dados será criada</p>
          </p>
        </Alert>
      </div>
    </div>
  )
}

export default InsertRecords