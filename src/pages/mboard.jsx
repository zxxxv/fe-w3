import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";
import Time from '../component/time'

const Board = styled.div`
    width: 100%;
    border: 1px solid black;
    P {
        float: left;
    }
`
const Title = styled.div`
    float: left;
    padding-left: 5px;
`
const Writer = styled.div`
    float: right;
    padding-right: 5px;
`
const Content = styled.div`
    clear: both;
    text-align: left;
    padding-left: 5px;
`
const Like0 = styled.span`
    float : right;
    padding-right: 5px
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

    let login = useSelector((state) => state.login)

    const [board, setboard] = useState([
    ])

    const [input, setinput] = useState([
        {
            title: '',
            content: '',
        },
    ]);

    const { title, content } = input;

    const onChange = (e) => {
        const { value, name } = e.target;
        setinput({
            ...input,
            [name]: value
        })
    }
    const onReset = () => {
        setinput({})
    };

    let [like, setlike] = useState([{}]);

    const eventHandler1 = () => {
        axios.get('http://192.168.0.111:8000/boardList')
            .then((res) => {setboard(res.data)})
            .catch((e) => { console.log(e) })
        console.log('aa')
    }
    
    const eventHandler2 = () => {
        axios.post('http://192.168.0.111:8000/userLike', { user_id: login.user.id })
            .then((res) => {setlike(res.data)})
            .catch((e) => { console.log(e) })
        console.log('bb')
    }

    useEffect(() => {
        axios.get('http://192.168.0.111:8000/boardList')
            .then((res) => {setboard(res.data)})
            .catch((e) => { console.log(e) })
        axios.post('http://192.168.0.111:8000/userLike', { user_id: login.user.id })
            .then((res) => {setlike(res.data)})
            .catch((e) => { console.log(e) })
        console.log('a')
    },[])

    useEffect(()=>{console.log('b')},[board,like])

    return (
        <>  {
            login.user === null ?
                <div><b>로그인 부터 하세요</b></div>
                :
                <>
                    <Board_input>
                        <b>제목</b>
                        <input name="title" onChange={onChange} value={title || ''} />
                        <div>
                            <h2>내용</h2>
                            <Content_input name="content" onChange={onChange} value={content || ''} />
                        </div>
                        <button onClick={() => {
                            let copy = [...board];
                            copy.push(input);
                            setboard(copy)
                            axios.post('http://192.168.0.111:8000/boardUpload',
                                { postdata: input, writer: login.user.id, })
                                .then((res) => { console.log(res.data) })
                                .catch((e) => { console.log(e) })
                            eventHandler1()
                            onReset()
                        }}>등록</button>
                        {/* {console.log(board)} */}
                    </Board_input>
                    {
                        board === null ? <>{console.log('a')}<div></div></>
                            :
                            board.map((a, i) => {
                                return (
                                    <Board key={a.id}>
                                        <Title><b>제목: </b>{a.title}</Title>
                                        <Writer><b>글쓴이: </b>{a.writer}</Writer>
                                        {/* {
                                            a.writer_user.name === null ? <div></div>:
                                            <Writer><b>글쓴이: </b>{a.writer_user.name}</Writer>
                                        } */}
                                        
                                        <Content><b>내용: </b>{a.content}</Content>
                                        <p><b>좋아요수:</b>{a.like_count}</p>
                                        <Time date={a.createdAt} />
                                        {
                                            login.user.id === a.writer ?
                                                <button onClick={() => {
                                                    axios.post('http://192.168.0.111:8000/boardRemove',
                                                        { id: a.id, writer: login.user.id })
                                                        .then((res) => { console.log(res.data) })
                                                        .catch((e) => { console.log(e) })
                                                }}>삭제</button>
                                                :
                                                null
                                        }
                                        {
                                            a.id === like.find(e=>e==a.id)
                                                ?
                                                <Like0 onClick={() => {
                                                    // console.log('좋아요')
                                                    axios.post('http://192.168.0.111:8000/like',
                                                        { user_id: login.user.id, post_id: a.id, like_state: false })
                                                        .then((res) => { console.log(res.data) })
                                                        .catch((e) => { console.log(e) })
                                                    eventHandler2()
                                                }}>
                                                    ❤️
                                                </Like0>
                                                :
                                                <Like0 onClick={() => {
                                                    // console.log('싫어요')
                                                    axios.post('http://192.168.0.111:8000/like',
                                                        { user_id: login.user.id, post_id: a.id, like_state: true })
                                                        .then((res) => { console.log(res.data) })
                                                        .catch((e) => { console.log(e) })
                                                    eventHandler2()
                                                }}>
                                                    🤍
                                                </Like0>
                                        }
                                        <Blank />
                                    </Board>
                                )
                            })
                    }
                </>
        }
        </>
    );
}

export default Mboard
