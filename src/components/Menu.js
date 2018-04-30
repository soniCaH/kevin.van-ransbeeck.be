import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import kevin from '../images/kevin.jpg'

const Header = styled.header`
  background: transparent;
  padding: 1.5em 0;
  position: fixed;
  width: 100%;
  z-index: 10;
`
const Logo = styled.span`
  color: white;
  font-weight: 600;

  img {
    width: 120px;
  }
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all .2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: white;
    }
  }
`

const activeLinkStyle = {
  color: 'base'
};

const Menu = () => {
    return (
      <Header>
        <Nav>
          <ul>
         
            <li><Logo><img src={kevin} /></Logo></li>
            <li><Link to="/" exact activeStyle={activeLinkStyle}>Home</Link></li>
            <li><Link to="/about/" activeStyle={activeLinkStyle}>About</Link></li>
            <li><Link to="/contact/" activeStyle={activeLinkStyle}>Contact</Link></li>
          </ul>
        </Nav>
      </Header>
    )
}

export default Menu
