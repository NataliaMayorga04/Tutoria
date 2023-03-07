import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Container>
      <Title></Title>
    </Container>
  
  )
}

export default Home

const Title = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 40vw;
background-image:url("images/Tren.png");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`
const Container = styled.div`
display: flex;
height: max-content;
flex-direction: column;
align-items: center;
position: relative;
`