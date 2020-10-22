import React from 'react'
import { CompanyForm } from '../../company/CompanyForm'
import '../../company/company.css'

export const CompanyFormPage = () => {
    return(
        <>
        <h2 id='companyFormTitle'>Formulário de Fabricantes</h2>
        <CompanyForm />
        </>
    )
}