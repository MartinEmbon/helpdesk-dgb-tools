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
            <Card.Header>Clarificando queries.  Unir uma ou mas tabelas a través de campos em comun</Card.Header>
            <Card.Body>
              <Card.Title>JOIN.</Card.Title>
              <Card.Text>
                <div className="col">            
                  <p>SELECT a.matricula, a.nome, count(*) from</p>
                  <p>tabela_de_vendedores A </p>          
                  <p>INNER JOIN notas_fiscais b</p>
                  <p>on a.matricula = b.matricula</p>
                  <p>group by a.matricula, a.nome;</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="my-card">
          <Card>
            <Card.Header>Clarificando queries.  Unir uma ou mas tabelas a través de campos em comun</Card.Header>
            <Card.Body>
              <Card.Title>JOIN.</Card.Title>
              <Card.Text>
                <div className="col">            
                  <p>SELECT a.matricula, a.nome, count(*) from</p>
                  <p>tabela_de_vendedores A </p>          
                  <p>INNER JOIN notas_fiscais b</p>
                  <p>on a.matricula = b.matricula</p>
                  <p>group by a.matricula, a.nome;</p>
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