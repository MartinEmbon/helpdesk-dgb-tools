import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Alert } from 'react-bootstrap'
import MongoMenu from './Menu'

import "../../App.css"
const FilterIn = () => {
  return (
    <div className='c-container'>
      <MongoMenu/>
          <div className="card-container">
          <div className="my-card">
                <Card>
                    <Card.Header>$in operator</Card.Header>
                    <Card.Body>
                        <Card.Title>$in operator</Card.Title>
                        <Card.Text>
                            <table>
                                <tbody>
                                    <tr>db.alunos.find(&#123;</tr>
                                    <tr style={{ paddingLeft: "16px" }}>"curso.nome":&#123;</tr>
                                    <tr style={{ paddingLeft: "16px" }}>$in:["Sistemas de informação","Matematica"]</tr>                                
                                    <tr style={{ paddingLeft: "32px" }}>&#125;</tr>
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
          <p>
          The $in operator selects the documents where the value of a field equals any value in the specified array.         
          </p>
          <hr />
          <p className="mb-0">
          <a target="_blank" href="https://docs.mongodb.com/manual/reference/operator/query/in/">$in operator</a>

          </p>
        </Alert>
      </div>
    </div>
  )
}

export default FilterIn