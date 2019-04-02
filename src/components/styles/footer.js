import styled from "styled-components"
import { Link } from "../common"

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.deepBlue};
  color: ${props => props.theme.gray};
`
const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`
const TopHeading = styled.h5`
  font-size: 1.5rem;
  line-height: 1.7rem;
  color: ${props => props.theme.white};
  font-weight: 700;
  margin: 40px 0 10px;
`
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  flex-direction: column;
`
const NavLink = styled(Link)`
  color: ${props => props.theme.lightGray};

  &:hover {
    color: ${props => props.theme.milky};
  }
`
const PrivacyLink = styled(Link)`
  color: ${props => props.theme.gray};
  margin-left: 5px;

  &:hover {
    color: ${props => props.theme.milky};
  }
`
const HorizontalNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  flex-direction: row;
`
const HorizontalNavListItem = styled.li`
  padding-left: 5px;
  line-height: 2.6rem;

  &:not(:last-of-type) {
    padding-right: 15px;
  }
  &:last-of-type {
    padding-right: 5px;
  }
`

export {
  FooterWrapper,
  TopWrapper,
  BottomWrapper,
  TopHeading,
  NavList,
  NavLink,
  PrivacyLink,
  HorizontalNavList,
  HorizontalNavListItem,
}
