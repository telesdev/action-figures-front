import React, { useState } from 'react'
import { Button, Form, Container } from 'react-bootstrap';
import './user.css'

export const UserForm = () => {
    
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <>
        <Container id='userFormContainer'>
            <Form>
                <Form.Group>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type='text' name='nome' placeholder='Entre com o seu nome' value={nome} onChange={e => setNome(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type='email' name='email' placeholder='Entre com o seu email' value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control type='password' name='senha' placeholder='Entre com a sua senha' value={senha} onChange={e => setSenha(e.target.value)} />
                </Form.Group>
                <Button onClick={e => alert(`Você digitou Nome: '${nome}', Email: '${email}' e Senha: '${senha}'`)}>Cadastrar</Button> 
            </Form>
        </Container>
        </>
    )
}