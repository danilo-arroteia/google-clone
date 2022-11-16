import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="location">
        <span>Brazil</span>
      </div>

      <div className="links">
        <a href="/">Settings</a>
        <a href="/">Privacy</a>
        <a href="/">Terms</a>
      </div>
    </Container>
  );
}
