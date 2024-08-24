import { Content } from './Content'
import { Profile } from './Profile'

import { SearchInput } from './SearchInput'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <SearchInput />
      <Content />
    </BlogContainer>
  )
}
