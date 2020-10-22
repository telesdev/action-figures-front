import React, { useState } from 'react'
import { Button, Form, Container } from 'react-bootstrap';
import './brand.css'

export const BrandForm = () => {
    
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    return (
        <>
        <Container id='brandFormContainer'>
            <Form>
                <Form.Group>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type='text' name='name' placeholder='Entre com o nome da marca' value={name} onChange={e => setName(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Descrição:</Form.Label>
                    <Form.Control type='text' name='description' placeholder='Entre com a descrição da marca' value={description} onChange={e => setDescription(e.target.value)} />
                </Form.Group>
                <Button onClick={e => alert(`Você digitou Nome: '${name}' e Descrição: '${description}'`)}>Cadastrar</Button> 
            </Form>
        </Container>
        </>
    )
}