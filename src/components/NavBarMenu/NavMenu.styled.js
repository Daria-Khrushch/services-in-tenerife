import styled from "@emotion/styled";

export const Wrapper = styled.div`
 background-color: ${props => props.theme.colors.main};
  color: white;
flex-shrink: 0;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  border-right: 2px solid ${props => props.theme.colors.white};

  @media (min-width: 900px) {
    padding: 10px;
    padding-bottom: 30px;
    font-size: 15px;
    height: 100%;
    width: 100%;
    align-items: flex-start;
    text-align: start;
  }
`

export const SidebarItem = styled.div`
 font-size: 20px;
  padding: 20px;
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
 justify-content: center;
  transition: all 0.15ms;
  margin-bottom: 15px;
  width: 100%;
  border-radius: 5px;
transition: background-color .2s;
:hover {
  background-color: ${props => props.theme.colors.navTransparent};

  transform: ${props => {
    switch (props.open) {
        case 'true':
            return 'rotate(180deg)';
        case 'false':
            return 'none';
        default:
            return'none';
    }
  }};

  /* className={open ? "sidebar-item open" : "sidebar-item"} */

  @media (min-width: 900px) {
    font-size: 15px;
    padding: 5px;
}
}
`