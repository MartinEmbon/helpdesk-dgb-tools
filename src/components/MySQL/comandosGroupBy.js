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
            <Card.Header>Agrupando campos repetidos. Utiliza GROUP BY si tem um campo na <br></br>frente a operação matemática</Card.Header>
            <Card.Body>
              <Card.Title>GROUP BY</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>SELECT estado, SUM(limite_de_credito)</p>
                  <p>AS LIMITE_TOTAL FROM tabela_de_clientes</p>
                  <p>GROUP BY estado;</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="my-card">
          <Card>
            <Card.Header>Agrupando campos repetidos</Card.Header>
            <Card.Body>
              <Card.Title>GROUP BY</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>SELECT embalagem, COUNT(*) from tabela_de_produtos</p>
                  <p>GROUP BY embalagem;</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="my-card">
          <Card>
            <Card.Header>Agrupando campos repetidos</Card.Header>
            <Card.Body>
              <Card.Title>GROUP BY. Operações matemáticas com GROUP</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>SUM * MAX * MIN * AVG * COUNT</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="my-card">
          <Card>
            <Card.Header style={{background:"teal", color:"white"}}>Agrupando e Ordenando</Card.Header>
            <Card.Body>
              <Card.Title>Hierarquía de campos</Card.Title>
              <Card.Text>
                <div className="col">
                  <ol>
                    <li>Select</li>
                    <li>Where</li>
                    <li>Group by</li>
                    <li>Order by by</li>
                  </ol>
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