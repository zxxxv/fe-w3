import axios from "axios";
import { useState } from "react";
import { Route, Routes, Link } from 'react-router-dom';
import styled from "styled-components";

const Login_box = styled.div`
    display: block;
    background: black;
`
let Box = styled.div`
    height: 30px;
    width: 100%;
    background: gray;
    display: flex;
    justify-content: space-between;
    border: 1px solid white;
    h4 {
        margin: 0px;
        padding: 0px;
        color: white;
    }
`

function Login() {

    const [user, setuser] = useState([
        {
            id: 'chohi',
            pw: '12345',
            em: '2@naver.com'
        }
    ]);

    const [input, setinput] = useState([
        {
            id: '',
            pw: '',
            em: ''
        }
    ]);

    const { id, pw, em } = user;

    const onChange = (e) => {
        const { value, name } = e.target;
        setinput({
            ...input,
            [name]: value
        })
    }

    let [login, setlogin] = useState(true)

    return (
        <>
            <Login_box>
                <div>
                    <input name="id" placeholder="ID" onChange={onChange} value={id} />
                </div>
                <div>
                    <input name="pw" placeholder="PW" onChange={onChange} value={pw} />
                </div>
                <div>
                    <input name="em" placeholder="E-Mail" onChange={onChange} value={em} />
                </div>
                {
                    login == false ?
                        <button onClick={() => {
                            let copy = [...user];
                            copy.push(input);
                            setuser(copy);
                            console.log(user);
                            //서버에서 데이터 가져오기
                            // axios.get('url')
                            // .then((result)=>{ 
                            //     console.log(result.data) 
                            // })
                            // .catch(()=>{
                            //     console.log('서버로부터 받기 실패함')
                            // })
                            //서버에 로그인 정보 보내기
                            // axios.post('')
                        }}>로그인</button>
                        : null
                }
            </Login_box>
            <Thead/>
            {
                user.map((a, i) => {
                    return (
                        <div>
                            <Box>
                                <h4 />
                                <h4>{i + 1}</h4>
                                <h4>{a.id}</h4>
                                <h4>{a.pw}</h4>
                                <h4>{a.em}</h4>
                                <button onClick={() => {
                                    let copy3 = [...user]
                                    copy3.splice(i, 1)
                                    setuser(copy3)
                                    {
                                        user == null ? setlogin(false) : setlogin(true)
                                    }
                                }}>로그아웃</button>
                                <h4 />
                            </Box>
                        </div>
                    );
                })
            }


        </>
    );
}

function Thead() {
    return (
        <div>

            <Box>
                <h4 />
                <h4>#</h4>
                <h4>ID</h4>
                <h4>PW</h4>
                <h4>E-mail</h4>
                <h4 />
                <h4 />
            </Box>
        </div>
    )
}

export default Login;