export interface ResponseApi<Data> {
  status: string
  token: string
  data?: Data
}
