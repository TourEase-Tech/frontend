interface Heading {
  [key: string]: string
}

export const HandleHeading = (location: string) => {
  const mappedHeading: Heading = {
    dashboard: 'Dashboard',
    users: 'Users',
    tours: 'Tours'
  }
  return mappedHeading[`${location}`]
}
