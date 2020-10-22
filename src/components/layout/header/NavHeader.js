import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavDropdown } from 'react-bootstrap'
import './header.css'

export const NavHeader = () => {
    return (
        <>
        <Nav className="justify-content-end">
            <Nav.Item>
                <NavLink className='nav-link' to='/' exact>Home</NavLink>
            </Nav.Item>
            <NavDropdown title="Usuários" id="nav-dropdown">
                <NavDropdown.Item>
                    <NavLink to='/user-list'>Lista de Usuários</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <NavLink to='/user-form'>Formulário de Usuários</NavLink>
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Figures" id="nav-dropdown">
                <NavDropdown.Item>
                    <NavLink to='/product-list'>Lista de Figures</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <NavLink to='/product-form'>Formulário de Figures</NavLink>
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Marcas" id="nav-dropdown">
                <NavDropdown.Item>
                    <NavLink to='/brand-list'>Lista de Marcas</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <NavLink to='/brand-form'>Formulário de Marcas</NavLink>
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Fabricantes" id="nav-dropdown">
                <NavDropdown.Item>
                    <NavLink to='/company-list'>Lista de Fabricantes</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <NavLink to='/company-form'>Formulário de Fabricantes</NavLink>
                </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
                <NavLink className='nav-link' to='/about'>Sobre</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className='nav-link' to='/login'>Login</NavLink>
            </Nav.Item>            
        </Nav>
        </>
    )
}