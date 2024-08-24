import React, { useContext } from 'react'
import {
  CardContainer,
  CardContent,
  CardTitle,
  MarkdownContainer,
} from './styles'
import { IssuesContext } from '../../../../context/IssuesContext'
import ReactMarkdown from 'react-markdown'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function Card() {
  const { issuesData } = useContext(IssuesContext)

  function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return formatDistanceToNow(date, { addSuffix: true, locale: ptBR })
  }

  return (
    <>
      {issuesData.map((post, index) => {
        return (
          <CardContainer to={`/post/${post.issueNumber}`} key={index}>
            <CardTitle>
              <div>
                <ReactMarkdown>{post.title}</ReactMarkdown>
              </div>
              <span>
                <ReactMarkdown>{formatDate(`${post.date}`)}</ReactMarkdown>
              </span>
            </CardTitle>
            <CardContent>
              <MarkdownContainer>
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </MarkdownContainer>
            </CardContent>
          </CardContainer>
        )
      })}
    </>
  )
}
