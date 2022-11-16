import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;

  div:not(:first-child) {
    border-top: 1px solid #e4e4e4;
  }

  .location {
    font-size: 16px;
    color: #5f6368;
    padding: 10px 12px;
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 13px;
    color: #5f6368;

    padding: 10px;

    a {
      text-decoration: none;
    }
    a:not(:first-child) {
      text-decoration: none;
      margin-left: 27px;
    }
  }
`;
