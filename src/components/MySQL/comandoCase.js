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
            <Card.Header>Clarificando queries</Card.Header>
            <Card.Body>
              <Card.Title>CASE. Fazemos um teste em um ou mais campos<br></br>e dependendo resultado, teremos um ou outro valor</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>SELECT NOME_DO_PRODUTO, PRECO_DE_LISTA,</p>
                  <p>CASE</p>
                  <p>WHEN preco_de_lista > 12 THEN "PRODUTO CARO"</p>
                  <p>WHEN preco_de_lista >=7 THEN "PRODUTO EM CONTA"</p>
                  <p>ELSE "produto barato" </p>
                  <p>END AS status_preco FROM tabela_de_produtos;</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="my-card">
          <Card>
            <Card.Header>Clarificando queries</Card.Header>
            <Card.Body>
              <Card.Title>CASE. Fazemos um teste em um ou mais campos<br></br>e dependendo resultado, teremos um ou outro valor</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>SELECT nome,</p>
                  <p>CASE</p>
                  <p>WHEN YEAR(DATA_DE_NASCIMENTO) "lt" 1990 THEN "velho"</p>
                  <p>WHEN YEAR(DATA_DE_NASCIMENTO) between 1990 and 1995 THEN "jovem"</p>
                  <p>ELSE "crianças"</p>
                  <p>end as clasificacao from tabela_de_clientes;</p>
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