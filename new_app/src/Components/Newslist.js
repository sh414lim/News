import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './Newsitem'
import axios from 'axios';

const NewsListBlock =styled.div`
box-sizing:border-box;
padding-bottom:3rem;
width:768px;
margin:0 auto;
margin-top:2rem;
@madia screen and(max-width : 768px){
    width: 100%;
    padding-left:1rem;
    padding-right:1rem
}


`;

const NewList=({category})=>{
    const [articles, setArticles] =useState(null);
    const [loading,setLoding]=useState(false);

    useEffect(()=>{
        //async를 사용하는 함수 따로 선언
        const fetchData=async ()=>{
            setLoding(true);
            try{
                const query=category === 'all' ? '': `&category=${category}`;
                const response =await axios.get(
                   `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=df9ec598fcf14c939f9b9cbbca22a42c`,
                );
                        setArticles(response.data.articles);
            }catch(e){
                console.log(e)
            }
            setLoding(false);
        };
        fetchData();
    },[ ]);

    //대기 중일 때
    if(loading){
        return<NewsListBlock>대기중 ...</NewsListBlock>
    }
    //아직 articles 값이 설정되지 않았을때
    if(!articles){
        return null;
    }

    //articles 값이 유효할때
    return(
        <NewsListBlock>
            {articles.map(article =>(
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    )
}

export default NewList;

