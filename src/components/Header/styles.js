import styled from "styled-components";

export const Nav = styled.nav`
    ul {
        display: flex;
        align-items: center;
        /* justify-content: space-between; */
        list-style-type: none;
        padding: 10px;

        li {
            &:not(:last-child) {
                margin-right: 20px;
            }
        }

    }
`

Nav.defaultName = "Nav"