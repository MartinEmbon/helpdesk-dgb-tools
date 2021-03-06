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
            <Card.Header>Comandos DML</Card.Header>
            <Card.Body>
              <Card.Title>Inserir valores na tabela</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>INSERT INTO alunos</p>
                  <p>VALUES (value1, value2, value3...)</p>
                  <p style={{ textAlign: "center" }}>- ou -</p>
                  <p>INSERT INTO alunos (ID, NAME, AGE, CITY)</p>
                  <p>VALUES (1, Lucas, 19, NY)</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="my-card">
          <Card>
            <Card.Header>Comandos DML</Card.Header>
            <Card.Body>
              <Card.Title>Inserir valores a partir de tabela em OUTRO banco</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>INSERT INTO cliente2</p>
                  <p>select cpf, nome,</p>
                  <p>endereco_1 as endereço, bairro, cidade,</p>
                  <p>from sucos_vendas.tabela_de_clientes;</p>
                  <p><b>Repare no mesmo ordem de colunas na tabela destino</b></p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>



        <div className="my-card">
          <Card>
            <Card.Header>Comandos DML</Card.Header>
            <Card.Body>
              <Card.Title>Atualizar valores existentes</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>UPDATE table_name</p>
                  <p>SET nome = "Lucas", City="NY"</p>
                  <p>WHERE id=1</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="my-card">
          <Card>
            <Card.Header>Comandos DML</Card.Header>
            <Card.Body>
              <Card.Title>Transferir valores de outra tabela</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>update vendedores A</p>
                  <p>inner join sucos_vendas.tabela_de_vendedores B</p>
                  <p>on a.matricula = b.matricula</p>
                  <p>set a.ferias = b.de_ferias;</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>


        <div className="my-card">
          <Card>
            <Card.Header>Comandos DML</Card.Header>
            <Card.Body>
              <Card.Title>DELETAR um registro existente</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>DELETE FROM table_name</p>
                  <p>WHERE funcionario="Lucas";</p>
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