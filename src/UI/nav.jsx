import styled from "styled-components";
import { Route, Routes, Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

function Nav() {
    return (
        <div>
            <h2><StyledLink to={"/"}>willywood</StyledLink></h2>
        </div>
    );
}

export default Nav;