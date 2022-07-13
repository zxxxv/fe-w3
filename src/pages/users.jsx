import styled from 'styled-components';


let StyledTable = styled.table`
    background: #1E1930;
    color: #D2D1D5;
    margin: auto;
    border: none;
    tr: nth - child(even) {
        background: #2e2649;
    }
    tr: nth - child(odd) {
        background: #423b5b;
    }
    th {
        background: #342F44;
        color: white;
    }
`

function UserTable() {
    return (
        <div>
            <StyledTable>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">PW</th>
                        <th scope="col">E-Mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="noBorder">1</td>
                        <td class="noBorder">Mark</td>
                        <td class="noBorder">Otto</td>
                        <td class="noBorder">88</td>
                    </tr>
                    <tr>
                        <td class="noBorder">2</td>
                        <td class="noBorder">Jacob</td>
                        <td class="noBorder">Thornton</td>
                        <td class="noBorder">91</td>
                    </tr>
                    <tr>
                        <td class="noBorder">3</td>
                        <td class="noBorder">Larry</td>
                        <td class="noBorder">the Bird</td>
                        <td class="noBorder">89</td>
                    </tr>
                    <tr>
                        <td class="noBorder">4</td>
                        <td class="noBorder">Andrew</td>
                        <td class="noBorder">Russo</td>
                        <td class="noBorder">87</td>
                    </tr>
                    <tr>
                        <td class="noBorder">5</td>
                        <td class="noBorder">James</td>
                        <td class="noBorder">Smith</td>
                        <td class="noBorder">85</td>
                    </tr>
                    <tr>
                        <td class="noBorder">6</td>
                        <td class="noBorder">Steve</td>
                        <td class="noBorder">Goodwin</td>
                        <td class="noBorder">88</td>
                    </tr>
                </tbody>
            </StyledTable>
        </div>
    );
}

export default UserTable;