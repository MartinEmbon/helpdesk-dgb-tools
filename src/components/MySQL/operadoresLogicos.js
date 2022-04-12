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
            <Card.Header>Operadores Lógicos</Card.Header>
            <Card.Body>
              <Card.Title>AND. Retorna só si a cláusula foi verdadeira</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>SELECT * FROM students</p>
                  <p>WHERE name = "Lucas" AND city = "NY";</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="my-card">
          <Card>
            <Card.Header>Operadores Lógicos</Card.Header>
            <Card.Body>
              <Card.Title>OR</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>SELECT * FROM students WHERE name = "Lucas" OR city = "NY";</p>                  
                  <p>SELECT * FROM tabela_de_produtos WHERE sabor = "uva" OR TAMANHO ="700 ML";</p>

                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="my-card">
          <Card>
            <Card.Header>Operadores Lógicos</Card.Header>
            <Card.Body>
              <Card.Title>IN. Retorna valor(es).</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>SELECT * FROM students WHERE city IN("NY","Miami");</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>


        <div className="my-card">
          <Card>
            <Card.Header>Operadores Lógicos</Card.Header>
            <Card.Body>
              <Card.Title>NOT. Retorna registros quando criterios não coincidem.</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>SELECT * FROM tabela_de_produtos WHERE sabor = "Manga"</p>
                  <p>AND NOT (tamanho = "700 ml");</p>
                  <p>SELECT * FROM tabela_de_produtos WHERE NOT (sabor = "uva" OR TAMANHO ="700 ML");</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>


        <div className="my-card">
          <Card>
            <Card.Header>Operadores Lógicos</Card.Header>
            <Card.Body>
              <Card.Title>BETWEEN. Retorna valores inclussos dentro do rango da query</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>SELECT * FROM students</p>
                  <p>WHERE id BETWEEN 20 AND 104;</p>
                </div>
              </Card.Text>
              <Button variant="primary" disabled>Copy Code</Button>
            </Card.Body>
          </Card>
        </div>
        
        <div className="my-card">
          <Card>
            <Card.Header>Operadores Lógicos - curingas usados normalmente: (%) e (_)</Card.Header>
            <Card.Body>
              <Card.Title>LIKE. Filtra registros baseados no padrão especificado</Card.Title>
              <Card.Text>
                <div className="col">
                  <p>SELECT * FROM students WHERE name LIKE "%Y";</p>
                  <p>retorna os nomes que terminem com "Y".</p>
                  <p style={{textAlign:"center"}}>- ou -</p>
                  <p>select * from tabela_de_produtos where sabor LIKE "%Maça%";</p>
                  <p>retorna os valores que contenham "Maça".</p>
                  <p style={{textAlign:"center"}}>- ou -</p>
                <p>SELECT * FROM students WHERE name LIKE "_u%";</p>
                <p>retorna os nomes qual segunda letra começa com "u" e após qualquer outra combinação".</p>
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