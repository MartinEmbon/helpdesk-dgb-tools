import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Alert } from 'react-bootstrap'
import MongoMenu from './Menu'

import "../../App.css"

const SortLimit = () => {
  return (
    <div className='c-container'>
        <MongoMenu/>
    <div className="card-container">
    <div className="my-card">
                <Card>
                    <Card.Header>Output ordem ASC</Card.Header>
                    <Card.Body>
                        <Card.Title>A-Z</Card.Title>
                        <Card.Text>
                            <table>                      
                                <tbody>
                                    <tr>db.alunos.find().sort(&#123;nome:1&#125;)</tr>
                                </tbody>
                            </table>
                        </Card.Text>
                        <Button variant="primary" disabled>Copy Code</Button>
                    </Card.Body>
                </Card>
            </div>

            <div className="my-card">
                <Card>
                    <Card.Header>Output ordem DSC</Card.Header>
                    <Card.Body>
                        <Card.Title>Z-A</Card.Title>
                        <Card.Text>
                            <table>                      
                                <tbody>
                                    <tr>db.alunos.find().sort(&#123;nome:-1&#125;)</tr>
                                </tbody>
                            </table>
                        </Card.Text>
                        <Button variant="primary" disabled>Copy Code</Button>
                    </Card.Body>
                </Card>
            </div>

            <div className="my-card">
                <Card>
                    <Card.Header>Limitar resultados exhibidos</Card.Header>
                    <Card.Body>
                        <Card.Title>.limit(#)</Card.Title>
                        <Card.Text>
                            <table>                      
                                <tbody>
                                    <tr>db.alunos.find().sort(&#123;nome:1&#125;).limit(5)</tr>
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
          <a target="_blank" href="https://docs.mongodb.com/manual/reference/method/cursor.sort/">Sort fields</a><br/>
          <a target="_blank" href="https://docs.mongodb.com/manual/reference/method/cursor.limit/">Limit fields</a>

          </p>
        </Alert>
      </div>
    </div>
  )
}

export default SortLimit