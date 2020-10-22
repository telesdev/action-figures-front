import React from 'react'
import { ProductForm } from '../../product/ProductForm'
import '../../product/product.css'

export const ProductFormPage = () => {
    return(
        <>
        <h2 id='productFormTitle'>Formulário de Figures</h2>
        <ProductForm />
        </>
    )
}