import React, { useState, useEffect } from 'react'
import { ProductListItem } from './ProductListItem'
import { FetchProducts } from '../../services/product'
import { Table, Container } from 'react-bootstrap'
import './product.css'

export const ProductList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getItem = async () => {
            const { data }  = await FetchProducts()
            setProducts(data)
        }
        getItem()
    }, [])

    return (
        <>
        <Container id='productListContainer'>
            <Table responsive bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Marca</th>
                        <th>Fabricante</th>
                        <th>Descrição</th>
                        <th>Versão</th>
                        <th>Valor</th>
                        <th>
                            <td>Tamanho</td>
                            <td>Material</td>
                            <td>Quantidade</td>
                        </th>
                        <th>Conteúdo</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => <ProductListItem product={product} key={product._id}/>)}
                </tbody>
            </Table>
        </Container>
        </>
    )
}