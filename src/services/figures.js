import { http } from '../config/config'

const Fetchproducts = () => http.get('/product')

export { Fetchproducts }