import React from 'react'
import './company.css'

export const CompanyListItem = ({ company }) => {
      
    return (
        <>
        <tr>
            <td>{company.name}</td>
            <td>{company.description}</td>
            <td>{company.address}</td>
            <td><span>Editar</span> | <span>Deletar</span></td>
        </tr>
        </>
    )
}