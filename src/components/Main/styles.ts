import styled from "styled-components";

export const Content = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 56px 8px 0;

  img {
    height: 56px;
  }

  input {
    margin-top: 18px;
    width: 100%;
    max-width: 736px;
    padding: 7px 10px 6px 20px;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.87);
    background: transparent;
    border-radius: 25px;
    border: 1px solid #dadce0;
    outline: 0;
  }

  .offer {
    margin-top: 24px;
    font-size: 13px;
    padding: 6px 12px;
  }

  a {
    text-decoration: none;
    color: #1967d2;
  }

  button {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.7);
    border: none;
    border-radius: 4px;
    outline: 0;
    padding: 10px 8px;
    margin: 12px 18px;
    text-decoration: none;
  }

  @media (min-width: 763px) {
    padding-top: 120px;

    img {
      height: 150px;
    }
  }
`;
