import React, { useState } from 'react'
import { Button, Form, Container } from 'react-bootstrap';
import './company.css'

export const CompanyForm = () => {
    
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')

    return (
        <>
        <Container id='companyFormContainer'>
        <Form>
                <Form.Group>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type='text' name='name' placeholder='Entre com o nome da marca' value={name} onChange={e => setName(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Descrição:</Form.Label>
                    <Form.Control type='text' name='description' placeholder='Entre com a descrição da marca' value={description} onChange={e => setDescription(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Endereço:</Form.Label>
                    <Form.Control type='text' name='address' placeholder='Entre com o endereço do fabricante' value={address} onChange={e => setAddress(e.target.value)} />
                </Form.Group>
                <Button onClick={e => alert(`Você digitou Nome: '${name}', Descrição: '${description}' e Endereço: '${address}'`)}>Cadastrar</Button> 
            </Form>
        </Container>
        </>
    )
}