import styled from "styled-components";


export const H4 = styled.h4`
font-style: oblique;

`

export const Button = styled.button`
width: 200px;
border-radius: 5px;
border: 2px solid grey;
margin: 10px;
background-color: ${props => (props.primary ? "#ed9e1f" : "white")};
color: ${props => (props.primary ? "white" : "#ed9e1f")};
`;