import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Alert } from 'react-bootstrap'
import MongoMenu from './Menu'
import "../../App.css"

const CreateCollection = () => {
  return (
    <div className="c-container">
      <MongoMenu/>
      <div className="card-container">
      <div className="my-card">
          <Card>
            <Card.Header>Comandos iniciais</Card.Header>
            <Card.Body>
              <Card.Title>Cria Banco de Dados </Card.Title>
              <Card.Text>
                use escola
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="my-card">
          <Card>
            <Card.Header>Comandos iniciais</Card.Header>
            <Card.Body>
              <Card.Title>Cria a coleção alunos dentro do banco escola</Card.Title>
              <Card.Text>
                db.createCollection("alunos")
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="my-card">
          <Card>
            <Card.Header>Comandos iniciais</Card.Header>
            <Card.Body>
              <Card.Title>Apagando a coleçâo alunos.</Card.Title>
              <Card.Text>
                db.alunos.drop()
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