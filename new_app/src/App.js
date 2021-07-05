import React,{ useCallback, useState } from 'react';
import Categories from './Components/Categories';
import NewsList from './Components/Newslist';
import { Button } from 'reactstrap';


  const App=()=>{
    const [category,setCategory]=useState('all');
    const onSelect =useCallback(category => setCategory(category),[]);
    
    
    return(
      <>
        <Categories category={category} onSelect={onSelect}/>
        <NewsList category={category}/>
        <Button color="info">info</Button>
        <Button color="danger">danger</Button>
        <Button color="success">success</Button>

      </>
    );
  };
export default App;