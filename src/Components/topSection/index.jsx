import React from 'react'
import styled from 'styled-components'

const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
   
`

const Logo = styled.h1`
   margin-top: 50px;
    color: #fff;
    font-weight: 700;
    font-size: 35px;

`;

const Slogan = styled.h4`
    margin:0;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    margin-top: 10px

`

const TopSection = () => {
  return (
    <TopSectionContainer>
        <Logo>TEST 3D</Logo>
        <Slogan>Keep Learning</Slogan>
    </TopSectionContainer>
  )
}

export default TopSection