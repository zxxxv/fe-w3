import styled from 'styled-components';
import { useState } from 'react';

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
let Result = styled.div`
  width: 70%;
  height: 100%;
  background: black;
  margin: auto;
  display: table
`

function Search() {
    let [movie] = useState(['이름을 태워야 할때', '도혁', '밥때', '넌', '헬로하와유', '용의자', '개꿈', '졸업', '관계의 초상', '잠기다', '불꽃놀이',
        'Ego identity', '통제불능', '드림러브', '찐(따)히어로의 탄생', '음악은 국가가 허락한 유일한 마약이다', '기프트']);
    let [search, setsearch] = useState('')

    return (
        <>  
            <div>
                <input placeholder='검색 하는 곳' onChange={(e) => { setsearch(e.target.value) }} />
            </div>
            <Result>
                {
                    movie.filter((finale) => {
                        if (search === '') { return finale }
                        else if (finale.toLowerCase().includes(search.toLowerCase())) { return finale }
                    }).map((a) => {
                        return (
                            <Card>
                                <h2>{a}</h2>
                            </Card>
                        )
                    })
                }
            </Result>
        </>
    );
}

export default Search;