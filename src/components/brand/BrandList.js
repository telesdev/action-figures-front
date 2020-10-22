import React, { useState, useEffect } from 'react'
import { FetchBrands } from '../../services/brand'
import { Table, Container } from 'react-bootstrap'
import { BrandListItem } from './BrandListItem'
import './brand.css'

export const BrandList = () => {
    
    const [brands, setBrands] = useState([])

    useEffect(() => {
        const getItem = async () => {
            const { data }  = await FetchBrands()
            setBrands(data)
        }
        getItem()
    }, [])

    return (
        <>
        <Container id='brandListContainer'>
            <Table responsive bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {brands.map(brand => <BrandListItem brand={brand} key={brand._id}/>)}
                </tbody>
            </Table>
        </Container>
        </>
    )
}