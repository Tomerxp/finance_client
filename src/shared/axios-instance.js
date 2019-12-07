import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://server-fx.netlify.com/.netlify/functions/index',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default instance
