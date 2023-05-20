import styled from "styled-components";

export const BlockBoxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
`;

export const BlockBoxContent = styled.div`
  width: 100%;
  padding: 48px;
  max-width: 980px;
  border-radius: 8px;
  background: ${(props) => props.theme.boxesColor};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  align-items: center;

  .button {
    margin-top: 24px;
  }
`;
