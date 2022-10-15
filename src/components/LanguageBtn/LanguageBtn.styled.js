import styled from "@emotion/styled";

export const BtnContainer = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
  font-size: 11px;
  width: 40px;
  display: flex;
  justify-content: space-between;
  margin-right: 8px;
  margin-top: 5px;

  @media (min-width: 900px) {
    margin-right: 20px;
    margin-top: 7px;
    width: 40px;
  }
`;

export const Btn = styled.button`
 color: ${(props) => props.theme.colors.white};
    font-size: 11px;
`;
