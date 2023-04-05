import styled from "styled-components";

export const TopBarContainer = styled.nav`
  position: relative;
  top: 0;
  background-color: transparent;
  width: 100%;
  padding: 0 24px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TopBarCenter = styled.div`
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12.5px;
`;

export const TopBarRight = styled.div`
  display: flex;
  align-items: center;
`;
