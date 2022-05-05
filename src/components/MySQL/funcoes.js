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
            <Card.Header>Funções</Card.Header>
            <Card.Body>
              <Card.Title>Funções com Data</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>select curdate();</p>
                  <p>select YEAR(current_timestamp());</p>
                  <p>SELECT monthname(current_timestamp());</p>
                  <p>select datediff("2023-02-02","2020-04-03");</p>
                  <p>select concat("o dia de hoje é ", DATE_FORMAT(current_timestamp(),"%m/%y"));</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="my-card">
          <Card>
            <Card.Header>Funções</Card.Header>
            <Card.Body>
              <Card.Title>Funções com Strings</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>SELECT LTRIM("   hola") as resultado;</p>
                  <p>SELECT rtrim("hola        ") as resultado;</p>
                  <p>select upper("ola");</p>
                  <p>select substring("hola, tudo bem",7,4);</p>
                  <p>select concat(nome, " (", cpf,")") as resultado from tabela_de_clientes;</p>
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
            <a target="_blank" href="https://docs.mongodb.com/manual/reference/method/db.collection.insert/">Inserir novo documento</a><br />
            <a target="_blank" href="https://docs.mongodb.com/manual/reference/method/db.collection.insert/">Veja também insertMany</a>

          </p>
        </Alert>
      </div>
    </div>
  )
}

export default InsertRecords