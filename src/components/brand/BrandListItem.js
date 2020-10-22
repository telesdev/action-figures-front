import React from 'react'
import './brand.css'

export const BrandListItem = ({ brand }) => {
      
    return (
        <>
        <tr>
            <td>{brand.name}</td>
            <td>{brand.description}</td>
            <td><span>Editar</span> | <span>Deletar</span></td>
        </tr>
        </>
    )
}