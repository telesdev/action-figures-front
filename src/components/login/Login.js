import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

export const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <>
        <Form controlId=''>
            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control type='email' placeholder='Insira seu email' value={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Senha:</Form.Label>
                <Form.Control type='password' placeholder='Insira sua senha' value={senha} onChange={e => setSenha(e.target.value)} />
            </Form.Group>
            <Button>Entrar</Button>
            <Button onClick={e => alert(`Você digitou Email: '${email}' e Senha: '${senha}'`)}>Esqueci minha senha</Button>
        </Form>
        </>
    )
}