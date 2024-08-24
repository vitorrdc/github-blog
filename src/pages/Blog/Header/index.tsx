import Logo from '../../../assets/logo.png'
import { HeaderContent } from '../Header/styles'

export function Header() {
  return (
    <HeaderContent>
      <img src={Logo} alt="" />
    </HeaderContent>
  )
}
