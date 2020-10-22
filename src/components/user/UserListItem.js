import React from 'react'
import './user.css'

export const UserListItem = ({ user }) => {
      
    return (
        <>
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><span>Editar</span> | <span>Deletar</span></td>
        </tr>
        </>
    )
}