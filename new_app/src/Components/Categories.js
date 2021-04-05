import React from 'react';
import { NavLink } from 'react-router-dom';
import styled,{css} from 'styled-components';

const categories=[

{
    name:'all',
    text:'전체보기'
},
{
    name:'business',
    text:'비즈니스',
},
{
    name:'entertainment',
    text:'엔터테인머트'
},
{
    name:'health',
    text:'건강'
},

{
    name:'science',
    text:'과학'
},
{
  name:'sport',
  text:'스포츠'  
},
{
    name:'techonlogy',
    text:'기술'
}

];

const CategiruesBlock=styled.div`
display:flex;
padding:1rem;
width:768px;
margin: 0 auto;
@media screen and(max-width: 768px){
    width:100%;
    overflow:auto;
}
`;


const Catogory=styled(NavLink)`
font-size:1.125rem;
cursor:pointer;
white-space:pre;
text-decoration:none;
color:inherit;
padding-bottom:0.25rem;

&:hover{
    color:#495057;
}
${props =>
    props.active && css`
    font-weight:600;
    border-bottom:2px solid #22b8cf;
    color:#22b8cf;
    &:hover{
        color:#3bc9db;
    }
    `}



&+&{
    margin-left:1rem;
}
`;

const Categiries=({onSelect,category})=>{
    return(
        <CategiruesBlock>
            {categories.map(c=>(
                <Catogory key={c.name} 
                activeClassName="active"
                exact={c.name ==='all'}
                to={c.name ==='all' ? '/' : `/${c.name}`}
>
                    {c.text}</Catogory>
            ))}
        </CategiruesBlock>
    )
}

export default Categiries;