import React,{useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate= new useNavigate();
  const [isOpen,setIsOpen] = useState(false); 
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
          <MenuLink to={`/prueba`}><span>Prueba</span></MenuLink>
        </MenuNav>
        <Hamburguer onClick={() => setIsOpen(!isOpen)}> 
          <span/>
          <span/>
          <span/>
        </Hamburguer>
        
    </Nav>
  )
}

export default Header

const Nav = styled.div`
padding: 0 6vh 0 2vw;
background-color: blanchedalmond;
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
  position: relative;
  @media (max-width: 740px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }

`
const MenuLink=styled(Link)`
  padding: 1rem 2rem;
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
            height: 2px;
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

const Hamburguer=styled.div`
display: none;
flex-direction: column;
cursor: pointer;
span{
  height: 2px;
  width: 25px;
  background: black;
  margin-bottom: 4px;
  border-radius: 5px;
}
@media (max-width: 740px){
  display: flex;
}
`
