import { http } from '../config/config'

const FetchProducts = () => http.get('/product')

export { FetchProducts }