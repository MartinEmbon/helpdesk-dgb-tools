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
            <Card.Header>Subconsultas</Card.Header>
            <Card.Body>
              <Card.Title>SUBCONSULTAS.</Card.Title>
              <Card.Text>
                <div className="col">            
                  <p>SELECT * FROM tabela_de_clientes</p>
                  <p>WHERE bairro IN</p>              
                  <p>(SELECT DISTINCT bairro from tabela_de_vendedores);</p>              
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="my-card">
          <Card>
            <Card.Header>Subconsultas II</Card.Header>
            <Card.Body>
              <Card.Title>SUBCONSULTAS.</Card.Title>
              <Card.Text>
                <div className="col">            
                  <p>SELECT x.embalagem, x.preco_maximo FROM</p>
                  <p>(SELECT embalagem, MAX(preco_de_lista) as PRECO_MAXIMO</p>          
                  <p>from tabela_de_produtos group by embalagem)</p>
                  <p> X where x.preco_maximo >=10;</p>
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