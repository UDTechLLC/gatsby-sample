import styled from 'styled-components'
import { Link } from '../common'

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
`

const HeaderContent = styled.div`
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const LogoWrapper = styled(Link)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0 0 0 40px;
`
const AltMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  flex-direction: row;
`
const NavItem = styled.li`
  margin-left: 0;
  padding: 0 20px;
  display: inline-flex;
  align-items: center;
`
const NavLink = styled(Link)`
  color: ${props => props.theme.gray};
  text-decoration: none;
  transition: 0.2s;
  display: inline-block;
  font-weight: 700;
  position: relative;

  &:hover {
    color: ${props => props.theme.darkGray};
  }
`

export {
  HeaderWrapper,
  HeaderContent,
  LogoWrapper,
  MenuWrapper,
  AltMenu,
  NavList,
  NavItem,
  NavLink,
}
