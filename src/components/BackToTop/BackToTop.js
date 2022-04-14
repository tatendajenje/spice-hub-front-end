import React from 'react'
import styled from 'styled-components';
import {FaArrowAltCircleUp} from 'react-icons/fa'

const A = styled.a`
color: #15A4F9;`

const H2 = styled.h2`
padding: 10px;
position:fixed;
bottom:0px;
right:0px;
background-color:#111;
padding:1rem;
font-size: 1rem;
margin:50px;
border-radius: 8px;
font-weight: normal;

&:hover{
    color: #fff;
    background-color: #15A4F9;
    transition: 400ms ease;
    cursor:pointer;
}
`
const BackToTop = () => {
  return (
    <div id='logo'>
         <A  href="#logo">
         <H2> <FaArrowAltCircleUp size={18}/></H2>
         </A>
        
    </div>
  )
}

export default BackToTop