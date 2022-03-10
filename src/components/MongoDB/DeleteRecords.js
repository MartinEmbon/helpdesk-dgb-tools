import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Alert } from 'react-bootstrap'
import "../../App.css"
const DeleteRecords = () => {
  return (
    <div className="c-container">
      <div className="card-container">
      <div className="my-card">
        <Card>
          <Card.Header>Apagar registros pelo _id</Card.Header>
          <Card.Body>
            <Card.Title>deleteOne</Card.Title>
            <Card.Text>
              <table>
                <tbody>
                  <tr>db.alunos.deleteOne(&#123;</tr>
                  <td style={{paddingLeft:"16px"}}>"_id": ObjectId("xxxxx")</td>
                  <tr>&#125;)</tr>
                </tbody>
                </table>               
            </Card.Text>
            <Button variant="primary" disabled>Copy Code</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="my-card">
        <Card>
          <Card.Header>Apagar registros pelo nome</Card.Header>
          <Card.Body>
            <Card.Title>deleteOne</Card.Title>
            <Card.Text>
              <table>
                <tbody>
                  <tr>db.alunos.deleteOne(&#123;"nome":"Felipe"&#125;)</tr>                 
                </tbody>
                </table>               
            </Card.Text>
            <Button variant="primary" disabled>Copy Code</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="my-card">
        <Card>
          <Card.Header>Apagar multiples registros</Card.Header>
          <Card.Body>
            <Card.Title>deleteMany</Card.Title>
            <Card.Text>
              <table>
                <tbody>
                  <tr>db.alunos.deleteMany(</tr>      
                  <tr style={{paddingLeft:"16px"}}>&#123; "notas": &#123; $lte:8 &#125; &#125;</tr>                 
                  <tr>)</tr>                            
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
          <a target="_blank" href="https://docs.mongodb.com/manual/reference/method/db.createCollection/">Delete Collection</a>
          </p>
        </Alert>
      </div>

    </div>
  )
}

export default DeleteRecords