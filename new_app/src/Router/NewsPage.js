import React from 'react';
import Categories from '../Components/Categories';
import NewsList from '../Components/Newslist';

const NewsPage =({match}) =>{
    //카테고리가 선택되지 않았으면 기본값 all으로 사용
    const category=match.params.category ||'all';

    return(
        <>
        <Categories/>
        <NewsList category={category}/>
        </>
    );
};

export default NewsPage;