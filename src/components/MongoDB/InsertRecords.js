import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Alert } from 'react-bootstrap'
import "../../App.css"
const InsertRecords = () => {
    return (
        <div className="c-container">    
           <div className="card-container">
           <div className="my-card">
                <Card>
                    <Card.Header>Inserindo <strong>UM</strong> registros</Card.Header>
                    <Card.Body>
                        <Card.Title>insertOne</Card.Title>
                        <Card.Text>
                            <table>
                                <tbody>
                                    <tr>db.alunos.insertOne(&#123;</tr>
                                    <td style={{ paddingLeft: "16px" }}>"Nome":"Andre",</td>
                                    <td style={{ paddingLeft: "16px" }}>"DOB":"1983-04-03",</td>
                                    <td style={{ paddingLeft: "16px" }}>"curso":&#123;</td>
                                    <td style={{paddingLeft:"32px"}}> "nome":"Matematica"</td>
                                    <td style={{paddingLeft:"32px"}}>&#125;,</td>
                                    <td style={{paddingLeft:"32px"}}>"notas":[7,9.9,4.5]</td>
                                    <td>&#125;)</td>
                                </tbody>
                            </table>
                        </Card.Text>
                        <Button variant="primary" disabled>Copy Code</Button>
                    </Card.Body>
                </Card>
            </div>          
            <div className="my-card">
                <Card>
                    <Card.Header>Inserindo <strong>VARIOS</strong> registros</Card.Header>
                    <Card.Body>
                        <Card.Title>insertMany</Card.Title>
                        <Card.Text>
                            <table>
                                <tbody>
                                    <tr>db.products.insertMany( [</tr>
                                    <td style={{ paddingLeft: "16px" }}>&#123;item: "envelopes", qty: 60&#125;,</td>
                                    <td style={{ paddingLeft: "16px" }}>&#123;item: "folhas", qty: 1000&#125;,</td>
                                    <td style={{ paddingLeft: "16px" }}>&#123;item: "canetas", qty: 20&#125;</td>
                                    <td style={{ paddingLeft: "0" }}>] )</td>                                   
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
          <a target="_blank" href="https://docs.mongodb.com/manual/reference/method/db.collection.insert/">Inserir novo documento</a><br/>
          <a target="_blank" href="https://docs.mongodb.com/manual/reference/method/db.collection.insert/">Veja também insertMany</a>

          </p>
        </Alert>
      </div>
        </div>
    )
}

export default InsertRecords