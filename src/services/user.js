import { http } from '../config/config'

const FetchUsers = () => http.get('/user')

export { FetchUsers }