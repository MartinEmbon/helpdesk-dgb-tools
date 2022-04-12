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
            <Card.Header>COMANDOS DDL - Data Definition Language</Card.Header>
            <Card.Body>
              <Card.Title>Selecionar um Banco para começar a trabalhar</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>USE database_name;</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="my-card">
          <Card>
            <Card.Header>COMANDOS DDL - Data Definition Language</Card.Header>
            <Card.Body>
              <Card.Title>Criar nova tabela </Card.Title>
              <Card.Text>
                <div className="col">
                  <p>CREATE TABLE table_name(</p>
                  <p>column1 datatype,</p>
                  <p> column2 datatype,</p>
                  <p>  column3 datatype</p>
                  <p> );</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>


        <div className="my-card">
          <Card>
            <Card.Header>Comandos DDL</Card.Header>
            <Card.Body>
              <Card.Title>Adicionar colunas</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>ALTER TABLE funcionarios</p>
                  <p>ADD email varchar(255);</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="my-card">
          <Card>
            <Card.Header>Comandos DDL</Card.Header>
            <Card.Body>
              <Card.Title>Deletar uma tabela existente</Card.Title>
              <Card.Text>
                DROP TABLE funcionarios;
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="my-card">
          <Card>
            <Card.Header>Comandos DDL</Card.Header>
            <Card.Body>
              <Card.Title>Deletar todas las filas (data)</Card.Title>
              <Card.Text>
                TRUNCATE TABLE funcionarios;
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
            <a target="_blank" href="https://docs.mongodb.com/manual/reference/method/db.createCollection/">Create collection</a><br />
            <a target="_blank" href="https://docs.mongodb.com/v4.4/reference/command/dropDatabase/">Drop collection</a>
          </p>
        </Alert>
      </div>



    </div>




  )
}

export default CreateCollection