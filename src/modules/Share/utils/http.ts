import axios, { type AxiosInstance } from 'axios'
import connect from '../constants/connect'
import {
  clearTokenFromLocalStorage,
  clearUserIdFromLocalStorage,
  getAccessTokenFromLocalStorage,
  getUserIdFromLocalStorage,
  setAccessTokenToLocalStorage,
  setUserIdToLocalStorage
} from 'src/modules/Authentication/utils/auth'
import { AuthResponse } from 'src/modules/Authentication/interfaces'
import { isAxiosUnauthorizedError } from './utils'
import { toast } from 'react-toastify'

class Http {
  instance: AxiosInstance
  private accessToken: string
  private userId: string
  constructor() {
    this.accessToken = getAccessTokenFromLocalStorage()
    this.userId = getUserIdFromLocalStorage()
    this.instance = axios.create({
      baseURL: connect.baseUrl,
      timeout: 20000,
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })

    // add a response interceptor
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.Authorization = `Bearer ${this.accessToken}`
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
        if (url == 'v1/users/login') {
          this.accessToken = (response.data as AuthResponse).token
          this.userId = (response.data as AuthResponse).data.user._id
          setAccessTokenToLocalStorage(this.accessToken)
          setUserIdToLocalStorage(this.userId)
        }
        return response
      },
      async (error: any) => {
        if (isAxiosUnauthorizedError(error)) {
          clearTokenFromLocalStorage()
          clearUserIdFromLocalStorage()
          toast.error('Token expired. Please log in again.')
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance
export default http
