import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Alert } from 'react-bootstrap'
import MongoMenu from './Menu'

import "../../App.css"

const FilterGtLt = () => {
  return (
    <div className='c-container'>
        <MongoMenu/>
    <div className="card-container">
    <div className="my-card">
                <Card>
                    <Card.Header>Filtros de comparação</Card.Header>
                    <Card.Body>
                        <Card.Title>$gt (greater than) - maior que</Card.Title>
                        <Card.Text>
                            <table>                      
                                <tbody>
                                    <tr>db.alunos.find(&#123;</tr>
                                    <tr style={{ paddingLeft: "16px" }}>"notas":&#123;$gt:5&#125;</tr>
                                    <tr style={{ paddingLeft: "16px" }}>&#125;)</tr>
                                </tbody>
                            </table>
                        </Card.Text>
                        <Button variant="primary" disabled>Copy Code</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="my-card">
                <Card>
                    <Card.Header>Filtros de comparação</Card.Header>
                    <Card.Body>
                        <Card.Title>$lt (less than) - menor que</Card.Title>
                        <Card.Text>
                            <table>                      
                                <tbody>
                                    <tr>db.alunos.find(&#123;</tr>
                                    <tr style={{ paddingLeft: "16px" }}>"notas":&#123;$lt:5&#125;</tr>
                                    <tr style={{ paddingLeft: "16px" }}>&#125;)</tr>
                                </tbody>
                            </table>
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
          <a target="_blank" href="https://docs.mongodb.com/manual/reference/operator/query/gt/">Greater than</a><br/>
          <a target="_blank" href="https://docs.mongodb.com/manual/reference/operator/query/lt/">Less than</a>

          </p>
        </Alert>
      </div>
    </div>
  )
}

export default FilterGtLt