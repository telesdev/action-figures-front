import axios from 'axios'

const http = axios.create({
    baseURL: 'https://action-figuresapi.herokuapp.com'
})

export { http }