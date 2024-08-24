import { useEffect, useState } from 'react'
import { PostContent } from './PostContent'
import { PostTitle } from './PostTitle'
import { PostContainer } from './styles'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export interface IssuePost {
  title: string
  content: string
}

export function Post() {
  const { issueNumber } = useParams<{ issueNumber: string }>()
  const [issue, setIssue] = useState<IssuePost>({ content: '', title: '' })

  useEffect(() => {
    const fetchIssue = async () => {
      const response = await axios.get(
        `https://api.github.com/repos/vitorrdc/github-blog/issues/${issueNumber}`,
      )
      setIssue({
        content: response.data.body,
        title: response.data.title,
      })
    }
    fetchIssue()
  }, [issueNumber])
  return (
    <PostContainer>
      <PostTitle issueTitle={issue.title} />
      <PostContent issueContent={issue.content} />
    </PostContainer>
  )
}
