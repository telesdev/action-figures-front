import React from 'react'
import { BrandList } from '../../brand/BrandList'
import '../../brand/brand.css'

export const BrandListPage = () => {
    return(
        <>
        <h2 id='brandListTitle'>Lista de Marcas</h2>
        <BrandList />
        </>
    )
}