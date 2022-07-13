import styled from 'styled-components';
import { useState } from 'react';
import Search from './pages/search.jsx';
import { Route, Routes, Link } from 'react-router-dom';
import Watch from './pages/watch.jsx';
import Upload from './pages/upload.jsx';
import Login from './pages/login.jsx';
import UserTable from './pages/users.jsx';
import Nav from './UI/nav.jsx';
import Mboard from './pages/mboard.jsx';

const Home0 = styled.div`
  margin: auto;
  color: black;
  text-align: center;
  a {
    color: green;
    text-decoration: none;
  }
  p {
    margin: 0;
  }
`
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


function Home() {

  let [category, setcategory] = useState(['All', '액션', '로맨스', '판타지', '회사', '모험', '사회문제', '스릴러', '공포', '청춘', '코미디', '가족', '드라마', '다큐', '일상'])

  return (
    <Home0>
      <Nav/>
      {/* <StyledLink to={"/watch"}>영상보기</StyledLink>/ */}
      {/* <StyledLink to={"/search"}>검색</StyledLink>/ */}
      {/* <StyledLink to={"/upload"}>업로드</StyledLink>/ */}
      <StyledLink to={"/login"}>로그인</StyledLink>/
      <StyledLink to={"/users"}>유저</StyledLink>/
      <StyledLink to={"/mboard"}>게시판</StyledLink>/
      <Routes>
        {/* <Route path='/' element={<Basic/>}/> */}
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/search' element={<Search/> }/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/users' element={<UserTable/>}/>
        <Route path='/mboard' element={<Mboard/>}/>
        {/* <Route path='/policy' element={<Policy/>}/> */}
      </Routes>
    </Home0>
  );
}

export default Home;
