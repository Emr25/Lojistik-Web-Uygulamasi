import React from 'react'
import { Col, Container } from 'react-bootstrap'
import {Row} from "react-bootstrap"
import Image from 'react-bootstrap/Image';
const Tarih = () => {
  return (
    <div>
        <Container>

       
        <h1 style={{textAlign:"center",fontFamily:"sans-serif"}}>Tarihçemiz</h1>
        <hr />
  <Row>
    <Col md={8}>
        <Image  src='https://cdn.create.vista.com/api/media/small/233884470/stock-photo-handsome-businessman-sitting-workplace-smiling-camera'/>
         
    </Col>

    <Col md={4}>
        <h3 style={{fontFamily:"sans-serif"}}>Biz kimiz ?</h3>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex nemo enim quis nisi aperiam dolorem optio asperiores explicabo officia, quos reprehenderit, ducimus laborum porro eos reiciendis nulla perspiciatis voluptates? Cupiditate repudiandae culpa fugiat molestias vel rerum quae aliquam autem perspiciatis. Molestias harum ex nisi expedita nam. Explicabo accusantium earum qui incidunt placeat sapiente! Dolore libero itaque assumenda illum nulla voluptate cum at accusantium repellendus omnis dignissimos consectetur ipsam quam suscipit autem nam, facilis dicta officiis minus pariatur neque vel.</p>
    </Col>

  </Row>
 </Container>
    </div>
  )
}

export default Tarih