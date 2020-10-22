import { http } from '../config/config'

const FetchCompanies = () => http.get('/company')

export { FetchCompanies }