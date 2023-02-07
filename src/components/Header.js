import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate= new useNavigate();

  const goToMain = () => {
    navigate(`/`)
  }

  return (
    <Nav>
        <Left>
            <Logo src ='images/logo.png' onClick={goToMain}/>
        </Left>

        <MenuNav>
          <MenuLink to={`/`}><span>Inicio</span></MenuLink>
          <MenuLink to={`/info`}><span>Info</span></MenuLink>
        </MenuNav>
        
    </Nav>
  )
}

export default Header

const Nav = styled.div`
padding: 0 6vh 0 2vh;
background-color: blanchedalmond;
display: flex;
min-height: 12vh;
align-items: center;
justify-content: space-between;
position: relative;
top: 0;
left: 0;
right: 0;
`
const Left = styled.div`
display: flex;
align-items: center;
padding: 1em;
width: 40%;
`

const Logo = styled.img`
cursor: pointer;
width: 30%;
@media (max-width: 740px){
    width: 60%;
}
`

const MenuNav =styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`
const MenuLink=styled(Link)`
  padding: 1em 2em;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 1.4em;
  font-weight: bold;
  color: black;

  span{
        position: relative; 
        &:after{
            content:"";
            height: 4px;
            background: black;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }
    &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
  }

`

