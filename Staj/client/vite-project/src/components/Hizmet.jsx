import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Hizmet = () => {
  return (
    <div style={{marginTop:"60px"}}>

        <Container>

            <h1 style={{textAlign:"center",fontFamily:"sans-serif"}}>Hizmetlerimiz</h1>
            <hr />
            <Row >
             <Col md={4} >
        <Card  border="light"style={{ width: '18rem',height:"400px"}}>
      <Card.Img variant="top" src="https://evdenevecim.com.tr/wp-content/uploads/2024/04/Osmangazi-Evden-Eve-Nakliyat-ile-Kolay-ve-Guvenli-Tasimacilik.jpg" />
      <Card.Body>
        <Card.Title>Güvenli Taşımacılık</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card> 
          </Col>

             <Col md={4}>
             <Card   border="light" style={{ width: '18rem', height:"400px" }}>
      <Card.Img variant="top" src="https://www.biltam.com.tr/tim/blog/cagri-merkezi-nedir-163282324076780100.png?w=860" style={{width:"285px",height:"200px"}} />
      <Card.Body>
        <Card.Title>Çağrı merkezi yardımı</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
             </Col>

             <Col md={4}>
              
             <Card   border="light" style={{ width: '18rem',height:"400px" }}>
      <Card.Img variant="top" src="https://www.infotechacademy.com.tr/content/education/fintech_software_development_infotech32.png" />
      <Card.Body>
        <Card.Title>Yazılım hizmeti</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
             
             
             </Col>


            </Row>
        

        </Container>
        
    </div>
  )
}

export default Hizmet