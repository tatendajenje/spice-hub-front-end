import styled from "styled-components";
import BackToTop from "../../BackToTop/BackToTop";
import { IoSearch } from 'react-icons/io5';
import {FaArrowAltCircleUp} from 'react-icons/fa'

const Section = styled.section`
width: 80%;
margin: 50px auto;
display: flex;
justify-content: center;
padding: 2rem;
align-items: center;
gap: 2rem;
`

const Input = styled.input`
padding:1rem ;
width:750px;
height:60px;
border: none;
border-radius:10px;
box-shadow: rgba(0, 0, 0, 0.9);
outline: none;
font-size:1rem;


`

const Button = styled.button`
background-color:${props => props.theme.primaryColor};
color: #FFFFFF;
padding:20px;
border: none;
border-radius:8px;
box-shadow: rgba(0, 0, 0, 0.9);
outline: none;
cursor: pointer;
text-align: center;


`





const Header = () => {
  return (
  <Section className="header">
   
      <div  className="logo">
         
          <h1>Spice Hub</h1>
          
      </div>

      <div className="input">
        <Input type="text"  placeholder="Search"   />
      </div>

      <div>
        <Button type="submit"><IoSearch size={18}/></Button>
      </div>

      <BackToTop/>

      

  </Section>
  )
}

export default Header;