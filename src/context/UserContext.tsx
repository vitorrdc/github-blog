import axios from 'axios'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface UserProviderProps {
  children: ReactNode
}

interface User {
  picture: string
  name: string
  bio: string
  username: string
  followers: string
}

interface UserContextType {
  userData: User[]
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: UserProviderProps) {
  const [userData, setUserData] = useState<User[]>([])

  const fetchUserData = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/vitorrdc')
      setUserData([
        {
          picture: response.data.avatar_url,
          name: response.data.name,
          bio: response.data.bio,
          followers: response.data.followers,
          username: response.data.login,
        },
      ])
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }

  console.log(userData)

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  )
}
