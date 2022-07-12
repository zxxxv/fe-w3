import styled from 'styled-components';
import { useState } from 'react';

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
let Card = styled.div`
  width: 100%;
  height: 100px;
  background: gray;
  color: white;
  border: 1px solid white;
  text-align: left;
  h2 {
    margin: 0px;
    padding: 10px 0px 0px 10px;
  }
`

function Home() {

  let [movie, setmovie] = useState(['이름을 태워야 할때', '도혁', '밥때', '넌', '헬로하와유', '용의자', '개꿈', '졸업', '관계의 초상', '잠기다', '불꽃놀이',
    'Ego identity', '통제불능', '드림러브', '찐(따)히어로의 탄생', '음악은 국가가 허락한 유일한 마약이다', '기프트']);
  let [category, setcategory] = useState(['All', '액션', '로맨스', '판타지', '회사', '모험', '사회문제', '스릴러', '공포', '청춘', '코미디', '가족', '드라마', '다큐', '일상'])
  let [search, setsearch] = useState('')

  return (
    <Home0>
      <div>
        <h3><a href='#'>willywood</a></h3>
      </div>
      <div>
        {/* <a href='#'>검색</a> */}
        <p>검색</p>
        <input onChange={(e) => { setsearch(e.target.value) }} />
      </div>
      <div>
        <a href='#'>업로드</a>
      </div>
      <div>
        <a href='#'>영상 시청</a>
      </div>
      {
        movie.filter((b) => {
          if (search == '') { return b }
          else if (b.includes(search)) { return b }
          console.log(b)
        }).map(function (a) {
          return (
            <Card>
              <h2>{a}</h2>
            </Card>
          )
        })
      }
      
    </Home0>
  );
}

export default Home;
