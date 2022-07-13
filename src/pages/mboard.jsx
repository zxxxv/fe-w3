import { useState } from "react";
import styled from "styled-components";

const Board = styled.div`
    width: 100%;
    border: 1px solid black;
`
const Title = styled.div`
    float: left;
`
const Writer = styled.div`
    float: right;
`
const Content = styled.div`
    clear: both;
    text-align: left;
`
const Like = styled.span`
    float: right;
`
const Blank = styled.div`
    clear: both;
`
const Board_input = styled.div`
    width: 900px;
    margin: auto;
    background: purple;
    height: 200px;
    b {
        color: white;
    }
    h2 {
        margin: 0;
        color: white;
    }
`
const Content_input = styled.input`
    width: 800px;
    height: 100px;
`

function Mboard() {

    let [board, setboard] = useState([
        {   
            id: 'chohi',
            title: '오늘 저녁',
            content: '오늘 저녁으로 햄버거 10,600원짜리 세트를 먹었다.',
            like: false,
            date:'2022.07.13/20:49:00'
        },
        {   
            id: 'chohi',
            title: '오늘 아침',
            content: '출근하기 ㅈㄴ 싫다.',    
            like: false,
            date:'2022.07.13/20:49:05'
        },
        {
            id: 'chohi',
            title: '오늘 점심',
            content: '비 ㅈㄴ 온다.', 
            like: false,
            date:'2022.07.13/20:49:07'
        }
    ])

    const [input, setinput] = useState([
        {   
            id: '',
            title: '',
            content: '',
            like: 'false'
        }
    ]);

    const {title, content } = board;

    const onChange = (e) => {
        const { value, name } = e.target;
        setinput({
            ...input,
            [name]: value
        })
    }
    const onReset = () => {
        setinput({
            title: '',
            content: '',
        })
    };

    let [like, setlike] = useState(false);

    return (
        <>  
            <Board_input>
                <b>제목</b>
                <input name="title" onChange={onChange} value={title}/>
                <div>
                    <h2>내용</h2>
                    <Content_input name="content" onChange={onChange} value={content}/>
                </div>
                <button onClick={()=>{
                    let copy = [...board];
                    copy.push(input);
                    setboard(copy)
                }}>등록</button>
            </Board_input>
            {
                board.map((a,i)=>{
                    return(
                <Board>
                    <Title><b>제목: </b>{a.title}</Title>
                    <Writer><b>글쓴이: </b>{a.id}</Writer>
                    <Content><b>내용: </b>{a.content}</Content>
                    <Like onClick={()=>{setlike(!like)}}>
                    {   
                        like == false ? '🤍' : '❤️'
                    }
                    </Like>
                    <button onClick={() => {
                                    let copy3 = [...board]
                                    copy3.splice(i, 1)
                                    setboard(copy3)
                                }}>삭제</button>
                    <Blank/>
                </Board>
                    )
                })
            }
            
            
            
        </>
    );
}

export default Mboard