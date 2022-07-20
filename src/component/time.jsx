import styled from "styled-components";

const Time0 = styled.p`
    padding-left: 100px;
`

function Time(props) {
    let timeSource = props.date
    let dateObj = new Date(timeSource);
    let timeString_KR = dateObj.toLocaleString("ko-KR", {timeZone: "Asia/Seoul"});
    return (
        <Time0>{timeString_KR}</Time0>
    )
}

export default Time;