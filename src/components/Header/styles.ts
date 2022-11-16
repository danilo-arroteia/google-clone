import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LeftMenu = styled.div`
  display: flex;
  align-items: center;

  img {
    padding: 12px 16px;
  }

  a {
    text-transform: uppercase;
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;
    color: #757575;
    padding: 12px 8px;
  }
  a.active {
    color: #4285f4;
    border-bottom: 2px solid #4285f4;
  }

  a:not(.active) {
    margin-bottom: 2px;
  }
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4px;

  img.icon {
    padding: 12px;
  }

  .profile {
    display: flex;
    margin-top: 7px;
    padding: 4px;
    width: 40px;
    height: 40px;
    position: relative;
  }

  img.avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  img.frame {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
