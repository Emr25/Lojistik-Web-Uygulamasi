
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Container,Form,Button} from "react-bootstrap"

function SignUp() {
    
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = () => {
        axios
        .get('http://localhost:8000/auth/login')
        .then((res) => {
            // console.log(res.data)
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .post('http://localhost:8000/auth/register', { email, username, password })
        .then(() => {
            alert('Registration Successful')
            setEmail('')
            setUsername('')
            setPassword('')
            fetchUsers();
            navigate('/login')
        })
        .catch((error) => {
            console.log('Unable to register user')
        })

    }

  return (
    <div style={{marginTop:"150px"}}>
        <h3 style={{textAlign:"center",fontFamily:"sans-serif"}}>Üye olmak için formu doldurmanız gerekmektedir</h3>
        <Container>
        <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formGroupPassword" value={email} onChange={(e)=>setEmail(e.target.value)}>
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="email adresi giriniz" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupEmail" value={username} onChange={(e)=>setUsername(e.target.value)}>
        <Form.Label>Username </Form.Label>
        <Form.Control type="text" placeholder="adınızı giriniz" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword" value={password} onChange={(e)=>setPassword(e.target.value)}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="şifrenizi giriniz" />
      </Form.Group>
      
      <Button type='submit'>Üye Ol</Button>
    </Form>
        </Container>
       </div>
  )
}

export default SignUp
