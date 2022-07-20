import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const Register_box = styled.div`
    display: block;
    background: black;
`
const Alert = styled.div`
    width: 100%;
    height: 50px;
    bacground: red;
    color: white;
`

function Register() {

    const [input, setinput] = useState([
        {
            ID: null,
            PW: null,
            NAME: null
        }
    ]);

    const { ID, PW, NAME } = input;

    const onChange = (e) => {
        const { value, name } = e.target;
        setinput({
            ...input,
            [name]: value
        })
    }

    const onReset = () => {
        setinput({
        })
    };

    return (
        <div>
            <Register_box>
                <div>
                    <input name="ID" placeholder="ID" onChange={onChange} value={ID || ''} />
                </div>
                <div>
                    <input name="PW" placeholder="PW" onChange={onChange} value={PW || ''} />
                </div>
                <div>
                    <input name="NAME" placeholder="이름" onChange={onChange} value={NAME || ''} />
                </div>
                <button onClick={() => {
                    console.log(input.ID)
                    axios.post('http://192.168.0.111:8000/duplicateCheck', { userdata: { ID: input.ID } })
                        .then((res) => {
                            console.log(res.data)
                            let result = res.data;
                            {
                                result === true ? <Alert>이용 가능한 아이디 입니다.</Alert> : <Alert>중복된 아이디 입니다.</Alert>
                            }
                        })
                        .catch((e) => {
                            console.log(e)
                        })
                }}>ID중복확인</button>
                <button onClick={() => {
                    console.log(input)
                    axios.post('http://192.168.0.111:8000/register', { userdata: input })
                        .then((res) => {
                            console.log(res.data)
                            // {
                            //     res.data === true ? <Alert>회원가입 완료</Alert> : <Alert>실패</Alert>
                            // }
                        })
                        .catch((e) => {
                            console.log(e)
                        })
                    // onReset()
                }}>회원가입</button>
            </Register_box>
        </div>
    );
}

export default Register