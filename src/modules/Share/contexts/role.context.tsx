import { createContext } from 'react'

interface RoleContextType {
  isAllowedTo: (role: string) => boolean
}

const initialRoleContext: RoleContextType = {
  isAllowedTo: () => false
}

export const RoleContext = createContext<RoleContextType>(initialRoleContext)

interface Props {
  fetchRole: (role: string) => boolean
  children: React.ReactNode
}

interface RoleCache {
  [key: string]: boolean
}

export const RoleProvider = ({ fetchRole, children }: Props) => {
  const cache: RoleCache = {}

  const isAllowedTo = (role: string): boolean => {
    if (Object.keys(cache).includes(role)) {
      return cache[role]
    }

    const isAllowed = fetchRole(role)

    cache[role] = isAllowed

    return isAllowed
  }

  return <RoleContext.Provider value={{ isAllowedTo }}>{children}</RoleContext.Provider>
}
