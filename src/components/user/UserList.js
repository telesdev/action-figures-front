import React, { useState, useEffect } from 'react'
import { FetchUsers } from '../../services/user'
import { Table, Container } from 'react-bootstrap'
import { UserListItem } from './UserListItem'
import './user.css'

export const UserList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getItem = async () => {
            const { data }  = await FetchUsers()
            setUsers(data)
        }
        getItem()
    }, [])
      
    return (
        <>
        <Container id='userListContainer'>
        <Table responsive bordered hover>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <UserListItem user={user} key={user._id}/>)}
            </tbody>
        </Table>
        </Container>
        </>
    )
}