export interface SuccessResponse<Data> {
  status: string
  token: string
  data?: Data
}
export interface ErrorResponse<Data> {
  status: string
  data?: Data
}
