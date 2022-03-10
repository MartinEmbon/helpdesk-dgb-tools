import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Alert } from 'react-bootstrap'
import "../../App.css"
const UpdateRecords = () => {
    return (
        <div className="c-container">
           <div className="card-container">
           <div className="my-card">
                <Card>
                    <Card.Header>Atualizar Registros - updateOne</Card.Header>
                    <Card.Body>
                    <Card.Title>Mudar <strong>UM</strong> nome do curso</Card.Title>
                        <Card.Text>
                            <table>
                                <tbody>
                                    <tr>db.alunos.updateOne(</tr>
                                    <tr style={{ paddingLeft: "16px" }}>&#123;"curso.nome":"Sistemas de informação"&#125;,</tr>
                                    <tr style={{ paddingLeft: "16px" }}>&#123;$set: &#123;</tr>
                                    <tr style={{ paddingLeft: "32px" }}>"curso.nome":"Matematica"</tr>
                                    <tr style={{ paddingLeft: "32px" }}>&#125;</tr>
                                    <tr style={{ paddingLeft: "16px" }}>&#125;</tr>
                                    <tr>)</tr>
                                </tbody>
                            </table>
                        </Card.Text>
                        <Button variant="primary" disabled>Copy Code</Button>
                    </Card.Body>
                </Card>
            </div>

            <div className="my-card">
                <Card>
                    <Card.Header>Atualizar Registros - updateMany</Card.Header>
                    <Card.Body>
                        <Card.Title>Mudar <strong>TODOS</strong> os nomes do curso</Card.Title>
                        <Card.Text>
                            <table>
                                <tbody>
                                    <tr>db.alunos.updateMany(</tr>
                                    <tr style={{ paddingLeft: "16px" }}>&#123;"curso.nome":"Sistemas de informação"&#125;,</tr>
                                    <tr style={{ paddingLeft: "16px" }}>&#123;$set: &#123;</tr>
                                    <tr style={{ paddingLeft: "32px" }}>"curso.nome":"Matematica"</tr>
                                    <tr style={{ paddingLeft: "32px" }}>&#125;</tr>
                                    <tr style={{ paddingLeft: "16px" }}>&#125;</tr>
                                    <tr>)</tr>
                                </tbody>
                            </table>
                        </Card.Text>
                        <Button variant="primary" disabled>Copy Code</Button>
                    </Card.Body>
                </Card>
            </div>

            <div className="my-card">
                <Card>
                    <Card.Header>Atualizar Registros</Card.Header>
                    <Card.Body>
                        <Card.Title>Modificar o array <strong>Completo</strong> de notas</Card.Title>
                        <Card.Text>
                            <table>
                                <tbody>
                                    <tr>db.alunos.update(</tr>
                                    <tr style={{ paddingLeft: "16px" }}>&#123;_id: ObjectId("62293251f5b25916ae936913")&#125;,</tr>
                                    <tr style={{ paddingLeft: "16px" }}>&#123;$set: &#123;</tr>
                                    <tr style={{ paddingLeft: "32px" }}>"notas":[10,9,7.5]</tr>
                                    <tr style={{ paddingLeft: "32px" }}>&#125;</tr>
                                    <tr style={{ paddingLeft: "16px" }}>&#125;</tr>
                                    <tr>)</tr>
                                </tbody>
                            </table>
                        </Card.Text>
                        <Button variant="primary" disabled>Copy Code</Button>
                    </Card.Body>
                </Card>
            </div>

            <div className="my-card">
                <Card>
                    <Card.Header>Atualizar Registros</Card.Header>
                    <Card.Body>
                        <Card.Title>Adicionar <strong>nova</strong> calificação a notas</Card.Title>
                        <Card.Text>
                            <table>
                                <tbody>
                                    <tr>db.alunos.update(</tr>
                                    <tr style={{ paddingLeft: "16px" }}>&#123;_id: ObjectId("62293251f5b25916ae936913")&#125;,</tr>
                                    <tr style={{ paddingLeft: "16px" }}>&#123;$push: &#123;</tr>
                                    <tr style={{ paddingLeft: "32px" }}>"notas":[5.5,6]</tr>
                                    <tr style={{ paddingLeft: "32px" }}>&#125;</tr>
                                    <tr style={{ paddingLeft: "16px" }}>&#125;</tr>
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
          <a target="_blank" href="https://docs.mongodb.com/manual/reference/method/db.collection.update/">Update Fields</a>

          </p>
        </Alert>
      </div>
        </div>
    )
}

export default UpdateRecords