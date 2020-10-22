import React from 'react'
import './product.css'

export const ProductListItem = ({ product }) => {
    return (
        <>
        <tr>
            <td>{product.name}</td>
            <td>{product.brand}</td>
            <td>{product.company}</td>
            <td>{product.description}</td>
            <td>{product.type}</td>
            <td>{product.price}</td>
            <td>
                <td>{product.features.size}</td>
                <td>{product.features.material}</td>
                <td>{product.features.quantity}</td>
            </td>
            <td>{product.content}</td>
            <td><span>Editar</span> | <span>Deletar</span></td>
        </tr>
        </>
    )
}