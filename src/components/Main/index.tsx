import logo from "../../assets/logo.svg";
import { Content } from "./styles";

export function Main() {
  return (
    <Content>
      <img className="logo" src={logo} alt="UiClone" />
      <input className="search" type="text" />

      <div className="buttons">
        <button type="submit">Google Search</button>
        <button type="submit">I'm feeling lucky</button>
      </div>

      <div className="offer">
        Made with Love by <a href="http://www.rocketseat.com.br">Rocketseat </a>
        for studying purposes
      </div>
    </Content>
  );
}
