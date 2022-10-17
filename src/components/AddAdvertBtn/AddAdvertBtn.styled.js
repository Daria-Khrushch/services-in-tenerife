import styled from "@emotion/styled";

export const Link = styled.a`
padding: 10px;
background-color: ${props => props.theme.colors.white};
color: ${props => props.theme.colors.main};
font-weight: bold;
border-radius: 10px;
font-size: 12px;
display:flex;
box-shadow: 0 5px 5px -5px rgba(0, 0, 0,.7);
transition: all 0.5s;
 position: relative;
margin-top: 30px;
:after {
  content: '»';
  position: absolute;
  opacity: 0;  
  top: 10px;
  right: -20px;
  transition: 0.5s;
}

:hover{
  padding-right: 24px;
  padding-left:8px;
}

:hover:after {
  opacity: 1;
  right: 10px;
}
`

export const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
`