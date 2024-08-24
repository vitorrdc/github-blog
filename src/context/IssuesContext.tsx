import axios from 'axios'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface IssuesProviderProps {
  children: ReactNode
}

interface Issue {
  title: string
  date: string
  content: string
  issueNumber: string
}

interface IssuesContextType {
  issuesData: Issue[]
  fetchIssuesData: (query?: string) => Promise<void>
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issuesData, setIssuesData] = useState<Issue[]>([])

  const fetchIssuesData = async (query?: string) => {
    try {
      const searchQuery = query
        ? `q=${encodeURIComponent(query)}+repo:vitorrdc/github-blog`
        : `q=repo:vitorrdc/github-blog`

      const response = await axios.get(
        `https://api.github.com/search/issues?${searchQuery}`,
        {
          headers: {
            Authorization: ``,
          },
        },
      )

      const formattedData = response.data.items.map((issue: any) => ({
        title: issue.title,
        content: issue.body,
        date: issue.updated_at,
        issueNumber: issue.number,
      }))

      setIssuesData(formattedData)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchIssuesData()
  }, [])

  return (
    <IssuesContext.Provider value={{ issuesData, fetchIssuesData }}>
      {children}
    </IssuesContext.Provider>
  )
}
