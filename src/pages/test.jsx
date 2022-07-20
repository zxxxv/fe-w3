import { useState } from "react"
import styled from "styled-components"

const TestBox = styled.div`
    width: 100%;
    height: 50px;
    background: green;
    border: 1px solid white;
    p {
        color: white;
    }
`


function Test() {

    let [category, setcategory] = useState(['All', '액션', '로맨스', '판타지', '회사', '모험', '사회문제',
        '스릴러', '공포', '청춘', '코미디', '가족', '드라마', '다큐', '일상'])

    return (
        <div>
            <p>좋아요 테스트 페이지</p>
            {
                category.map((a) => {
                    return (
                        <TestBox>
                            <p>{a}</p>
                        </TestBox>
                    )
                })
            }
        </div>
    )
}

export default Test