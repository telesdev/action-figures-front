import { http } from '../config/config'

const FetchBrands = () => http.get('/brand')

export { FetchBrands }