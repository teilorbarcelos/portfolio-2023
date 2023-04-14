import styled from "styled-components";

export const PageHeaderContainer = styled.section`
  position: relative;
  background-color: #1e2738;
  max-width: 980px;
  margin-top: 80px;
  padding: 0 48px 48px;
  border-radius: 8px;
  background: ${(props) => props.theme.boxesColor};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  align-items: center;

  .profile-image {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 8px solid ${(props) => props.theme.boxesColor};
    border-radius: 50%;
  }

  .profile-name {
    margin-top: 90px;

    font-weight: 900;
    font-size: 28px;
    line-height: 34px;
    color: ${(props) => props.theme.titlesColor};
  }

  .header-text {
    margin-top: 16px;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    p {
      color: ${(props) => props.theme.pTextColor};
    }

    a {
      color: ${(props) => props.theme.aLinksColor};
    }
  }
`;
