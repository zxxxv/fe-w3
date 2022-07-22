import styled from 'styled-components';
import { useState } from 'react';
import Search from './pages/search.jsx';
import { Route, Routes, Link } from 'react-router-dom';
import Watch from './pages/watch.jsx';
import Upload from './pages/upload.jsx';
import Login from './pages/login.jsx';
import Nav from './UI/nav.jsx';
import Mboard from './pages/mboard.jsx';
import Register from './pages/register.jsx';
import { useSelector } from "react-redux";

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
    color: black;
  }
`
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


function Home() {

  let [category, setcategory] = useState(['All', '액션', '로맨스', '판타지', '회사', '모험', '사회문제',
   '스릴러', '공포', '청춘', '코미디', '가족', '드라마', '다큐', '일상'])
  let login = useSelector((state) => state.login)
  return (
    <Home0>
      <Nav/>
      {/* <StyledLink to={"/watch"}>영상보기</StyledLink>/ */}
      {/* <StyledLink to={"/search"}>검색</StyledLink>/ */}
      {/* <StyledLink to={"/upload"}>업로드</StyledLink>/ */}
      <StyledLink to={"/login"}>로그인</StyledLink>/
      <StyledLink to={"/mboard"}>게시판</StyledLink>/
      <StyledLink to={"/register"}>회원가입</StyledLink>/
      <Routes>
        {/* <Route path='/' element={<Basic/>}/> */}
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/search' element={<Search/> }/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/mboard' element={<Mboard/>}/>
        <Route path='/register' element={<Register/>}/>
        {/* <Route path='/policy' element={<Policy/>}/> */}
      </Routes>
    </Home0>
  );
}

export default Home;


//env 파일 이용하여 서버 주소 저장
