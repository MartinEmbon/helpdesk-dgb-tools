import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Alert } from 'react-bootstrap'
import "../../App.css"
import { Link } from 'react-router-dom'
const FilterRecords = () => {
    return (
        <div className="c-container">

            <div className="card-container">
                <div className="my-card">
                    <Card>
                        <Card.Header>Filtrando resultados</Card.Header>
                        <Card.Body>
                            <Card.Title>Mostrar todos os resultados</Card.Title>
                            <Card.Text>
                                <table>
                                    <tbody>
                                        <tr>db.alunos.find()</tr>
                                    </tbody>
                                </table>
                            </Card.Text>
                            <Button variant="primary" disabled>Copy Code</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="my-card">
                    <Card>
                        <Card.Header>Filtrando resultados</Card.Header>
                        <Card.Body>
                            <Card.Title>Prettify output</Card.Title>
                            <Card.Text>
                                <table>
                                    <tbody>
                                        <tr>db.alunos.find().pretty()</tr>
                                    </tbody>
                                </table>
                            </Card.Text>
                            <Button variant="primary" disabled>Copy Code</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="my-card">
                    <Card>
                        <Card.Header>Filtrando resultados</Card.Header>
                        <Card.Body>
                            <Card.Title>Mostrar alunos com nome Felipe</Card.Title>
                            <Card.Text>
                                <table>
                                    <tbody>
                                        <tr>db.alunos.find(&#123;nome:"Felipe"&#125;)</tr>
                                    </tbody>
                                </table>
                            </Card.Text>
                            <Button variant="primary" disabled>Copy Code</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="my-card">
                    <Card>
                        <Card.Header>Filtrando resultados</Card.Header>
                        <Card.Body>
                            <Card.Title>Mostrar alunos com habilidade de ingles</Card.Title>
                            <Card.Text>
                                <table>
                                    <tbody>
                                        <tr>db.alunos.find(</tr>
                                        <td style={{ paddingLeft: "16px" }}>&#123;"habilidades.nome":"ingles"&#125;</td>
                                        <td style={{ paddingLeft: "16px" }}>)</td>
                                    </tbody>
                                </table>
                            </Card.Text>
                            <Button variant="primary" disabled>Copy Code</Button>
                        </Card.Body>
                    </Card>
                </div>
                
                <div className="my-card">
                    <Card>
                        <Card.Header style={{backgroundColor:"teal", color:"white"}}>Outros Filtros</Card.Header>
                        <Card.Body>
                            <Card.Title>Revisar filtros especiais para complementar</Card.Title>
                            <Card.Text>
                                <table>
                                    <tbody>
                                        <td style={{paddingLeft:"12px"}}><li><Link to="/mongodb/in">$in</Link> </li></td>
                                        <td style={{paddingLeft:"12px"}}><li><Link to="/mongodb/or">$or</Link> </li></td>
                                        <td style={{paddingLeft:"12px"}}><li><Link to="/mongodb/gt">$gt/$lt</Link> </li></td>

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
                    A filter modifies an incoming MongoDB query to return only a subset of the results matched by the query.
                     Filters add additional query parameters and omit fields from query results before Realm runs the query.

                    </p>
                    <hr />
                    <p className="mb-0">
                        <a target="_blank" href="https://docs.mongodb.com/realm/rules/filters/">Filter Documents</a>

                    </p>
                </Alert>
            </div>

        </div>

    )
}

export default FilterRecords