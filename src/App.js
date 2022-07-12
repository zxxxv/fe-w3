import styled from 'styled-components';
import { useState } from 'react';
import Search from './pages/search.jsx';
import {BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Watch from './pages/watch.jsx';
import Upload from './pages/upload.jsx';

let Home0 = styled.div`
  margin: auto;
  color: black;
  text-align: center;
  a {
    text-decoration: none;
  }
  p {
    margin: 0;
  }
`


function Home() {

  let [category, setcategory] = useState(['All', '액션', '로맨스', '판타지', '회사', '모험', '사회문제', '스릴러', '공포', '청춘', '코미디', '가족', '드라마', '다큐', '일상'])

  return (
    <Home0>
      <div>
        <h2><Link to={"/"}>willywood</Link></h2>
      </div>
      
      <Link to={"/watch"}>영상보기</Link>/
      <Link to={"/search"}>검색</Link>/
      <Link to={"/upload"}>업로드</Link>
      <Routes>
        {/* <Route path='/' element={<Basic/>}/> */}
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/search' element={<Search/> }/>
        <Route path='/upload' element={<Upload/>}/>
        {/* <Route path='/policy' element={<Policy/>}/> */}
      </Routes>
    </Home0>
  );
}

export default Home;
