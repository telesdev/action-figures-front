import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './components/layout/header/Header'
import { Footer } from './components/layout/footer/Footer'
import { 
    UserListPage, UserFormPage,
    ProductListPage, ProductFormPage, 
    BrandListPage, BrandFormPage, 
    CompanyListPage, CompanyFormPage
} from './components/pages'

function App() {
  return (
    <>
    <Router>
        <Header />
            <Switch>
                <Route path='/user-list'><UserListPage /></Route>
                <Route path='/user-form'><UserFormPage /></Route>
                <Route path='/product-list'><ProductListPage /></Route>
                <Route path='/product-form'><ProductFormPage /></Route>
                <Route path='/brand-list'><BrandListPage /></Route>
                <Route path='/brand-form'><BrandFormPage /></Route>
                <Route path='/company-list'><CompanyListPage /></Route>
                <Route path='/company-form'><CompanyFormPage /></Route>
            </Switch>
        <Footer />  
    </Router>
    </>
  );
}

export default App;