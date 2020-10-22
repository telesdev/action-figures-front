import React, { useState, useEffect } from 'react'
import { FetchCompanies } from '../../services/company'
import { Table, Container } from 'react-bootstrap'
import { CompanyListItem } from './CompanyListItem'
import './company.css'

export const CompanyList = () => {

    const [companies, setCompanies] = useState([])

    useEffect(() => {
        const getItem = async () => {
            const { data }  = await FetchCompanies()
            setCompanies(data)
        }
        getItem()
    }, [])

    return (
        <>
        <Container id='companyListContainer'>
            <Table responsive bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Endereço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map(company => <CompanyListItem company={company} key={company._id}/>)}
                </tbody>
            </Table>
        </Container>
        </>
    )
}