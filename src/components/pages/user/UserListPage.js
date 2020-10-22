import React from 'react'
import { UserList } from '../../user/UserList'
import '../../user/user.css'

export const UserListPage = () => {
    return(
        <>
        <h2 id='userListTitle'>Lista de Usuários</h2>
        <UserList />
        </>
    )
}