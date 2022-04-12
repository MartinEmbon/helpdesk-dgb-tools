import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Alert } from 'react-bootstrap'
import MongoMenu from './Menu'

import "../../App.css"
const FilterOr = () => {
  return (
    <div className='c-container'>
      <MongoMenu/>
       <div className="card-container">
       <div className="my-card">  
                <Card>
                    <Card.Header>$or Operator</Card.Header>
                    <Card.Body>
                        <Card.Title>Use case</Card.Title>
                        <Card.Text>
                            <table>
                                <tbody>
                                    <tr>db.alunos.find(&#123;</tr>                                    
                                    <tr style={{ paddingLeft: "16px" }}>$or:[</tr>
                                    <tr style={{ paddingLeft: "32px" }}>&#123;"curso.nome":"Sistemas de informação"&#125;,</tr>
                                    <tr style={{ paddingLeft: "32px" }}>&#123;"curso.nome":"Matematica"&#125;,</tr>
                                    <tr style={{ paddingLeft: "32px" }}>&#123;"curso.nome":"Moda"&#125;</tr>
                                    <tr style={{ paddingLeft: "32px" }}>]</tr>                                
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
          <a target="_blank" href="https://docs.mongodb.com/manual/reference/operator/query/or/">$or operator</a>

          </p>
        </Alert>
      </div>
    </div>
  )
}

export default FilterOr