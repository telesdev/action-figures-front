import React from 'react'
import { ProductList } from '../../product/ProductList'
import '../../product/product.css'

export const ProductListPage = () => {
    return(
        <>
        <h2 id='productListTitle'>Lista de Figures</h2>
        <ProductList />
        </>
    )
}