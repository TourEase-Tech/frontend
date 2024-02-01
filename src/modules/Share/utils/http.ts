import axios, { type AxiosInstance } from 'axios'
import connect from '../constants/connect'
import { getAccessTokenFromLocalStorage, setAccessTokenToLocalStorage } from 'src/modules/Authentication/utils/auth'
import path from '../constants/path'
import { AuthResponse } from 'src/modules/Authentication/interfaces'
import HttpStatusCode from '../constants/httpStatusCode.enum'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = getAccessTokenFromLocalStorage()
    this.instance = axios.create({
      baseURL: connect.baseUrl,
      timeout: 20000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // add a response interceptor
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === path.login || url === path.register) {
          this.accessToken = (response.data as AuthResponse).token
          setAccessTokenToLocalStorage(this.accessToken)
        }
        return response
      },
      async (error: any) => {
        if (
          ![HttpStatusCode.UnprocessableEntity, HttpStatusCode.Unauthorized].includes(error.response?.status as number)
        ) {
          const data: any | undefined = error.response?.data
          const message = data?.code || error.code
          console.log(message)
        }
      }
    )
  }
}

const http = new Http().instance
export default http
