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
            <Card.Header>Paginando Queries</Card.Header>
            <Card.Body>
              <Card.Title>LIMIT</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>SELECT * FROM tabela_de_produtos LIMIT 5; </p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="my-card">
          <Card>
            <Card.Header>Paginando Queries</Card.Header>
            <Card.Body>
              <Card.Title>LIMIT COM PARÁMETRO</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>SELECT * FROM tabela_de_produtos LIMIT 2, 3;</p>
                  <p>Pega a partir do segundo inclusive, um total de 3 registros</p>
                  <p>OBS: Registro começa a partir do índice 0</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="my-card">
          <Card>
            <Card.Header>Ordenando Saída Queries</Card.Header>
            <Card.Body>
              <Card.Title>ORDER BY</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>SELECT * FROM tabela_de_produtos ORDER BY preco_de_lista;</p>
                  <p>Ordena menor a maior</p>
                  <p>SELECT * FROM tabela_de_produtos ORDER BY preco_de_lista DESC;</p>
                  <p>Ordena maior a menor</p>
                  <p>SELECT * FROM tabela_de_produtos</p>
                  <p>ORDER BY sabor ASC, preco_de_lista DESC;</p>
                  <p>Combinar colunas</p>
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