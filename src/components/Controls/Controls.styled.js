import styled from "@emotion/styled";

export const ControlsContainer = styled.div`
display: flex;
justify-content: space-evenly;
`
export const ControlsHeader = styled.h2`
font-size: 36px;
font-weight: 700;
`
export const Btn = styled.button`
padding: 6px 15px;
font-size: 18px;
text-transform: capitalize;
background-color: white;
border: solid 1px silver;
border-radius: 5px;
&:hover {
    background-color: silver;
  }
&:active {
    background-color: #415BD2;
    color: white;
  }
`