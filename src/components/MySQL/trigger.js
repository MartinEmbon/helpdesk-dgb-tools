import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Alert } from 'react-bootstrap'
import MongoMenu from './Menu'
import "../../App.css"

const CreateCollection = () => {
  return (
    <div className="c-container">
      <MongoMenu />
      <div className="card-container">
        <div className="my-card">
          <Card>
            <Card.Header>Commit e Rollback</Card.Header>
            <Card.Body>
              <Card.Title>START TRANSACTION</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>DELIMITER//</p>
                  <p>CREATE TRIGGER nome_do_trigger</p>
                  <p>BEFORE INSERT</p>
                  <p>ON nome_da_tabela FOR EACH ROW</p>
                  <p>BEGIN</p>
                  <p>-- codigo_a_ser_executado</p>
                  <p>END//</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>


      </div>



      <div className="alert">
        <Alert variant="success">
          <Alert.Heading>Commit e Rollback</Alert.Heading>
          <hr />
          <p className="mb-0">
            <p>Commit: confirmo todas as operações entre o Start Transaction e o commando Commit. Insert,update ou delete irão ser confirmados e gravados na base</p>
            <p>Rollback: Tudo que foi feito entre o Start Transaction e o Rollback sera desprezado e os dados voltarão ao status de quando o Start Transaction foi executado</p>
          </p>
        </Alert>
      </div>



    </div>




  )
}

export default CreateCollection