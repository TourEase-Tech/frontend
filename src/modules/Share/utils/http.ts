import axios, { type AxiosInstance } from 'axios'
import connect from '../constants/connect'
import { getAccessTokenFromLocalStorage } from 'src/modules/Authentication/utils/auth'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = getAccessTokenFromLocalStorage()
    this.instance = axios.create({
      baseURL: connect.baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // add a response interceptor
    this.instance.interceptors.response.use(
      (config) => {
        if (this.accessToken) {
          config.headers.Authorization = this.accessToken
          return config
        }
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )
  }
}

const http = new Http().instance
export default http
