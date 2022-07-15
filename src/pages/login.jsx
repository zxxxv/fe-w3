import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {setlogin, setloginstate } from "../store";

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

    let p = '재웅'

    let loginstate = useSelector((state) => state.loginstate)
    let login = useSelector((state) => state.login)
    let dispatch = useDispatch()

    const [input, setinput] = useState([
        {
            ID: '',
            PW: '',
        }
    ]);

    const { ID, PW } = input;

    const onChange = (e) => {
        const { value, name } = e.target;
        setinput({
            ...input,
            [name]: value
        })
    }

    const onReset = () => {
        setinput({
            ID: '',
            PW: '',
        })
    };

    return (
        <>
            {
                loginstate.log == false ?
                    <Login_box>
                        {console.log(loginstate)}
                        {console.log(login)}
                        <div>
                            <input name="ID" placeholder="ID" onChange={onChange} value={ID} />
                        </div>
                        <div>
                            <input name="PW" placeholder="PW" onChange={onChange} value={PW} />
                        </div>
                        <button onClick={() => {
                            axios.post('http://192.168.0.111:8000/login', { userdata: input, state: 'login' })
                                .then((res) => {
                                    console.log(res.data)
                                    dispatch(setlogin(res.data))
                                    {
                                        
                                    }
                                })
                                .catch((e) => {
                                    console.log(e)
                                })
                            dispatch(setlogin({p}))
                            dispatch(setloginstate(true));
                        }}>로그인</button>
                    </Login_box>
                    :
                    <>
                        <h3>로그인된 유저</h3>
                        {console.log(loginstate)}
                        {console.log(login)}
                        <Box>
                            <h4 />
                            <h4 />
                            <h4>{p}</h4>
                            <button onClick={() => {
                                onReset();
                                // axios.post('http://192.168.0.111:8000/login', { userdata: input, state: 'logout' })
                                //     .then((res) => {
                                //         console.log(res.data)
                                //     })
                                //     .catch(() => {
                                //         console.log('실패함')
                                //     })
                                dispatch(setlogin(null))
                                dispatch(setloginstate(false));
                            }}>로그아웃</button>
                            <h4 />
                        </Box>
                    </>
            }
        </>
    );
}

export default Login;

// headers: { "Content-Type": `application/json`}