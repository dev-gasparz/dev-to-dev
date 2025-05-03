import Logo from "../assets/icons/devtodev/Logo";
import GithubIcon from "../assets/icons/GithubIcon";
import GoogleIcon from "../assets/icons/Google/GoogleIcon";
import LottieLogin from "../assets/lotties/LottieLogin";
import { Button } from "../components/Button/Button";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle, signInWithGithub } = useAuth();

  return (
    <section className="login">
      <div className="login-left-content container">
        <LottieLogin />
      </div>
      <div className="login-right-content">
        <section>
          <Logo />
          <Button className="signInWithGoogle" onClick={signInWithGoogle}>
            <GoogleIcon /> Entrar com Google
          </Button>
          <Button className="signInWithGithub" onClick={signInWithGithub}>
            <GithubIcon /> Entrar com Github
          </Button>
        </section>
      </div>
    </section>
  );
};

export default Login;
