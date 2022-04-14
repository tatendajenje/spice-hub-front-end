import React , { useState , useEffect} from 'react'
import styled from 'styled-components';
import data from '../../assets/data'

const Article = styled.article`
width:1200px;
margin:0px auto;
display: flex;
padding:1rem;
justify-content: flex-start;
flex-wrap: wrap;
`

const Span = styled.span`
padding:1.2rem 2.8rem;
margin:1rem;
background-color:#fff;
border-radius:30px;
box-shadow: 8px 8px 12px  rgba(0, 0, 0, 0.025);
cursor:pointer;
color: #111;

&:hover{
    background-color: #111;
    padding:1rem 2.6rem;
    color: #fff;
    transition: 400ms ease;
    text-decoration: 4px #15A4F9 underline;
}


`

const Section = styled.section`
width:1200px;
margin:0px auto;
display: flex;
padding:2rem;
justify-content: flex-start;
flex-wrap: wrap;


`

const Header = styled.header`
width:340px;
height:max-content;
margin:1rem;
background-color:#fff;
padding:1.2rem;
border-radius:30px;
display:flex;
flex-direction:column;
gap: 15px;
box-shadow: 8px 8px 12px  rgba(0, 0, 0, 0.025);
cursor:pointer;


&:hover{
    
    border:1px solid #15A4F9;
    transition :100ms ease;
}

`

const Image = styled.img`
width:300px;
height:300px;
object-fit:cover;
border-radius:20px;
box-shadow: 8px 8px 12px  rgba(0, 0, 0, 0.1);


`

const H2 = styled.h2`
font-size:1.1rem;
font-weight:bold;
color:#111;

`

const H4 = styled.h4`
font-size:1.1rem;
font-weight:100;
color:#111;

`

const Button = styled.button`
width: 180px;
height:60px;
background-color:#15A4F9;
border-radius:6px;
border: none;
color: #FFFFFF;
font-size:1.1rem;
box-shadow: 8px 8px 12px  rgba(0, 0, 0, 0.05);
cursor:pointer;


&:hover{
    background-color: #BEE7FF;
    transition: 400ms ease;

}
`

const Card = () => {
    const [ mydata , setData] = useState([]);

    const fetchData = () =>{
        setData(data);
    }

    useEffect(()=>{
        fetchData();
    })
  return (

    <div>
        <Article>
           {mydata.map((recs,i)=>{
               return(
                   <Span key={i.id}>{recs.group}</Span>
               )
           })}
           
        </Article>
        <Section>

            {mydata.map((rec,i) =>{
                return(
                    <Header key={i.id}>
                        <div>
                            <Image src={rec.img} />
                        </div>

                        <div>
                            <H2>{rec.recipe_name}</H2>
                            <H4><span>published at: </span>{rec.published_date}</H4>
                        </div>

                        <div>
                            <Button>read more</Button>
                        </div>
                    </Header>
                )
            })}
           

            

            

        </Section>
    </div>
  )
}

export default Card