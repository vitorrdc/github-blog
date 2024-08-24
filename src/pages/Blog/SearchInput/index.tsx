import { z } from 'zod'
import { Input, Label, SearchInputContainer } from './styles'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect, useState } from 'react'
import { IssuesContext } from '../../../context/IssuesContext'

const searchIssueSchema = z.object({
  query: z.string(),
})

type SearchIssueInputs = z.infer<typeof searchIssueSchema>

export function SearchInput() {
  const { register, watch } = useForm<SearchIssueInputs>({
    resolver: zodResolver(searchIssueSchema),
  })

  const { fetchIssuesData } = useContext(IssuesContext)

  const query = watch('query')

  useEffect(() => {
    if (query) {
      fetchIssuesData(query)
    }
  }, [query, fetchIssuesData])

  return (
    <SearchInputContainer>
      <Label>
        <div>Publicações</div>
        <span>6 publicações</span>
      </Label>
      <Input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchInputContainer>
  )
}
