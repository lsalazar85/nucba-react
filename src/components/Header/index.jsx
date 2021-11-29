import './styles.jsx'
import { HeaderContainer, HeaderSpan } from './styles'

const Header = ({ text }) => (
    <HeaderContainer>
        <HeaderSpan>{text}</HeaderSpan>
    </HeaderContainer>
)

export default Header