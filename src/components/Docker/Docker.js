import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Tabs, Tab, Card, Button, Alert } from 'react-bootstrap'
import "../../App.css"
import SortLimit from '../MongoDB/SortLimit'

const Docker = () => {
  return (
    <div className="c-container">

      <div className="tab-container">
        <h1 style={{ textAlign: "center" }}>Images Command</h1>
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="downloadImage" title="Download Image">
            <p><a target="_blank" href="https://hub.docker.com/search?q=node&type=image">Docker Hub</a></p>
            <p>Ex: <code>docker pull node</code></p>
          </Tab>

          <Tab eventKey="buildImage" title="Build Image">
            <p> -t = tag for addint namey</p>
            <p>docker build -t myappninja</p>
            <p>docker build -t myapp:nodemon .</p>
            <p>DOWNLOAD IMAGE WITH TAG</p>
            <p>docker build -t myapp:v1 . </p>
          </Tab>

          <Tab eventKey="listImage" title="List Image">
            <p>list all images (so later stop containers)</p>
            <p>docker images</p>
          </Tab>

          <Tab eventKey="startImage" title="Start Image and Run Container">
            <p>docker run --name myapp_c_nodemon -p 4000:4000 -rm  myapp:nodemon</p>
            <p>run images assinging a --name for the container (myapp_c1)</p>
            <p>docker run --name myapp_c1  01308220af81</p>
          </Tab>


          <Tab eventKey="removeAll" title="Remove All">
            <p>REMOVE ALL</p>
            <p>docker system prune -a</p>
          </Tab>

          <Tab eventKey="removeImage" title="Delete Image">
            <p><strong>DELETE IMAGES IF NOT IN USE</strong></p>
            <p>docker image rm myapp3</p>
            <p><strong>DELETE FORCE</strong></p>
            <p> docker image rm myapp5 -f</p>
            <p><strong>DELETE CONTAINER IF NOT IN USE</strong></p>
            <p>docker container rm myapp_c3</p>
          </Tab>
        </Tabs>
      </div>


      <div className="tab-container">
        <h1 style={{ textAlign: "center" }}>Container Command</h1>

        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >

          <Tab eventKey="startImage" title="Start Image and Run Container">
            <p>docker run --name myapp_c_nodemon -p 4000:4000 -rm  myapp:nodemon</p>
            <p>run images assinging a --name for the container (myapp_c1)</p>
            <p>docker run --name myapp_c1  01308220af81</p>
          </Tab>
          <Tab eventKey="stopContainer" title="Stop Container">
            <p>docker stop id or container name</p>
          </Tab>
          <Tab eventKey="listContainer" title="List Container">
            <p>docker ps - shows constainers that currently running</p>
            <p>docker ps -a (from all), shows all</p>
          </Tab>
          <Tab eventKey="removeAll" title="Remove All">
            <p><strong>REMOVE ALL</strong></p>
            <p>docker system prune -a</p>
          </Tab>

        </Tabs>
      </div>


      <div className="alert">
        <Alert variant="success">
          <Alert.Heading>Documentação MongoDB</Alert.Heading>
          <hr />
          <p className="mb-0">
            <a target="_blank" href="https://docs.mongodb.com/manual/reference/method/db.createCollection/">Create collection</a><br />
            <a target="_blank" href="https://docs.mongodb.com/v4.4/reference/command/dropDatabase/">Drop collection</a>
          </p>
        </Alert>
      </div>



    </div>




  )
}

export default Docker