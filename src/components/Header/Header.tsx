import Logo from "../../assets/icons/devtodev/Logo";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../Button/Button";

const Header = () => {
  const { logout } = useAuth();
  return (
    <header>
      <div className="header-content">
        <a href="/">
          <Logo />
        </a>
        <div className="right-content">
          <Button onClick={logout}>Encerrar sessão</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
