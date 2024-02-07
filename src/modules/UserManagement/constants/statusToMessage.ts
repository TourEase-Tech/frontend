interface Status {
  [key: string]: string
}
export const StatusToMessage = (status: boolean) => {
  const mappedEventStatus: Status = {
    true: 'Active',
    false: 'Lock'
  }
  return mappedEventStatus[`${status}`]
}
