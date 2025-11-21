import styled from "styled-components";

export const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: 100vw;
`;

export const ColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
`;

export const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 0;
  width: 100%;
`;

export const ContainerStyled = styled.div<{
  inputheight?: string;
  backgroundcolor?: string;
}>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.backgroundcolor};
  height: ${(props) => props.inputheight || "100%"};
  padding: 10px;
  margin: 20px;
  gap: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 0;
`;

export const ContainerTitle = styled.div`
  display: flex;
  color: white;
  justify-content: center;
`;

export const ButtonStyled = styled.button<{
  color: string;
  backgroundcolor: string;
  bordercolor: string;
  hovercolor: string;
  hoverbackgroundcolor: string;
  hoverbordercolor: string;
}>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundcolor};
  border: 2px solid ${(props) => props.bordercolor};
  transition-duration: 0.4s;
  padding: 8px 20px;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.hoverbackgroundcolor};
    border: 2px solid ${(props) => props.hoverbordercolor};
    color: ${(props) => props.hovercolor};
  }
`;

export const TextAreaStyled = styled.textarea<{ hoverbordercolor: string }>`
  border: 3px solid white;
  display: block;
  width: 40%;
  resize: none;
  height: 20px;
  transition-duration: 0.4s;
  border-radius: 5px;

  &:focus {
    outline: none;
    box-shadow: none;
    background-color: white;
  }

  &:hover {
    border: 3px solid ${(props) => props.hoverbordercolor};
  }
`;
