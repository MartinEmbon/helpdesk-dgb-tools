import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Tabs, Tab, Card, Button, Alert } from 'react-bootstrap'
import "../../App.css"
import SortLimit from '../MongoDB/SortLimit'

const Certificados = () => {
  return (
    <div className="c-container">

      <div className="tab-container">
        <h1 style={{ textAlign: "center" }}>Certificados</h1>
        <ul>
          <ol><p>openssl req -x509 -days 365 -newkey rsa:2048 -keyout private-key.pem -out certificate.pem</p></ol>
          <ol><p>openssl pkcs12 -export -in certificate.pem -inkey private-key.pem -out DGB.pfx</p></ol>
          <ol><p>openssl pkcs12 -in DGB.pfx -clcerts -nokeys -out publik-key.pem</p></ol>                    
        </ul>
        <div className="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/oX0Et0RtxoM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      
      </div>


      <div className="alert">
        <Alert variant="success">
          <Alert.Heading>Descarga Open SSL para Windows</Alert.Heading>
          <hr />
          <p className="mb-0">
            <a target="_blank" href="https://slproweb.com/products/Win32OpenSSL.html">OpenSSL -Windows-</a><br />            
          </p>
        </Alert>
      </div>



    </div>




  )
}

export default Certificados