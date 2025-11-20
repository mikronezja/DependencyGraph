import styled from "styled-components";

export const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7d4ffff;
  height: 100vh;
  min-width: 100vw;
`;

export const ColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
`;

export const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
`;

export const ContainerStyled = styled.div<{ inputHeight?: string }>`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  height: ${(props) => props.inputHeight || "100%"};
  padding: 10px;
  box-shadow: 10px 10px #f2b8ffff;
  margin: 20px;
  flex-grow: 0;
  width: 30vw;
  gap: 10px;
  overflow-y: auto;
  min-height: 0;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonStyled = styled.button<{
  color: string;
  backgroundColor: string;
  borderColor: string;
  hoverColor: string;
  hoverBackgroundColor: string;
  hoverBorderColor: string;
}>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.borderColor};
  transition-duration: 0.4s;
  padding: 8px 20px;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    border: 2px solid ${(props) => props.hoverBorderColor};
    color: ${(props) => props.hoverColor};
  }
`;

export const TextAreaStyled = styled.textarea`
  border: 2px solid #f2b8ffff;
  display: block;
  flex-shrink: 0;
  resize: none;
`;
