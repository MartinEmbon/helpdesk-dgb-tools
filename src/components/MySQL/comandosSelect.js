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
            <Card.Header>Consultando Queries</Card.Header>
            <Card.Body>
              <Card.Title>Select All (*) ou com Filtros</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>SELECT * FROM tabela_de_clientes;</p>
                  <p>SELECT cpf, nome FROM tabela_de_clientes;</p>
                  <p>SELECT * FROM tabela_de_produtos WHERE sabor = "uva";</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="my-card">
          <Card>
            <Card.Header style={{ background: "teal", color: "white" }}>Consultando Queries</Card.Header>
            <Card.Body>
              <Card.Title>ALIAS para renomear coluna</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>SELECT cpf AS identificador FROM tabela_de_clientes;</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="my-card">
          <Card>
            <Card.Header>Consultando Queries</Card.Header>
            <Card.Body>
              <Card.Title>DISTINCT. Retora linhas com valores diferentes</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>SELECT DISTINCT embalagem, tamanho FROM tabela_de_produtos;</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

     


        <div className="my-card">
          <Card>
            <Card.Header>HAVING. Condição que se aplica a resultado de uma agregação.</Card.Header>
            <Card.Body>
              <Card.Title>Utilizado após GROUP BY</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>SELECT estado, SUM(limite_de_credito) as CREDITO   </p>
                  <p>FROM tabela_de_clientes</p>
                  <p>GROUP BY estado</p>
                  <p>HAVING SUM(limite_de_credito) > 900000;</p>
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
            <a target="_blank" href="https://docs.mongodb.com/manual/reference/method/db.createCollection/">Create collection</a><br />
            <a target="_blank" href="https://docs.mongodb.com/v4.4/reference/command/dropDatabase/">Drop collection</a>
          </p>
        </Alert>
      </div>



    </div>




  )
}

export default CreateCollection