/* eslint-disable import/no-named-as-default-member */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from 'axios'
import HttpStatusCode from '../constants/httpStatusCode.enum'
import moment from 'moment-timezone'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}

export function isAxiosUnauthorizedError(error: unknown): error is AxiosError {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.Unauthorized
}
export function formatDateTimeVN(dateTime: string) {
  return moment(dateTime).add(7, 'hours').format('HH:mm DD/MM/YYYY')
}
