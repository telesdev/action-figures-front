import React from 'react'
import { UserForm } from '../../user/UserForm'
import '../../user/user.css'

export const UserFormPage = () => {
    return(
        <>
        <h2 id='userFormTitle'>Formulário de Usuários</h2>
        <UserForm />
        </>
    )
}