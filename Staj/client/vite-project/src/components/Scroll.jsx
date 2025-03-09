import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Container} from "react-bootstrap"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.avif"

const Scroll = () => {
  return (
    <div>
      <Container> 
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img style={{height:'500px',width:"100%"}}
        
        src={img1}
       
      />
      <Carousel.Caption>
        <h2 style={{color:"white",fontFamily:"sans-serif"}}>Denizyolu taşımacılığı
        </h2>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'500px',width:"100%"}}
        
        src="https://www.navlun.com.tr/upload/blog/20-03-2017_72063_karayolu.jpg"
       
      />

      <Carousel.Caption>
        <h2 style={{color:"white",fontFamily:"sans-serif"}}>Karayolu taşımacılığı</h2>
      
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'500px',width:"100%"}}
        
        src="https://static.vecteezy.com/system/resources/previews/028/576/282/non_2x/airplane-and-cargo-in-the-airport-at-sunset-3d-rendering-airplane-cargo-transportation-by-plane-unloading-containers-of-boxes-at-the-airport-ai-generated-free-photo.jpg"
        
      />

      <Carousel.Caption>
        <h2 style={{color:"white",fontFamily:"sans-serif"}}>Havayolu taşımacılığı</h2>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </Container>
  </div>
  )
}

export default Scroll