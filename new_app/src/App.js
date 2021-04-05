import React,{ useCallback, useState } from 'react';
import Categories from './Components/Categories';
import NewsList from './Components/Newslist';


  const App=()=>{
    const [category,setCategory]=useState('all');
    const onSelect =useCallback(category => setCategory(category),[]);
    
    
    return(
      <>
        <Categories category={category} onSelect={onSelect}/>
        <NewsList category={category}/>

      </>
    );
  };
export default App;