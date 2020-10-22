import React from 'react'
import { CompanyList } from '../../company/CompanyList'
import '../../company/company.css'

export const CompanyListPage = () => {
    return(
        <>
        <h2 id='companyListTitle'>Lista de Fabricantes</h2>
        <CompanyList />
        </>
    )
}