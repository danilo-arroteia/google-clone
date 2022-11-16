import burgerIcon from "../../assets/burger-icon.svg";
import moreIcon from "../../assets/more-icon.svg";
import frame from "../../assets/circle-frame.svg";

import { HeaderContainer, LeftMenu, RightMenu } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <LeftMenu>
        <img src={burgerIcon} alt="" />
        <a className="active" href="/">
          All
        </a>
        <a href="/">Images</a>
      </LeftMenu>
      <RightMenu>
        <img className="icon" src={moreIcon} alt="More" />
        <div className="profile">
          <img className="frame" src={frame} alt="Frame" />

          <img
            className="avatar"
            src="https://www.github.com/danilo-arroteia.png"
            alt="Avatar"
          />
        </div>
      </RightMenu>
    </HeaderContainer>
  );
}
