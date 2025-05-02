import GithubIcon from "../assets/icons/GithubIcon";
import GoogleIcon from "../assets/icons/Google/GoogleIcon";
import LottieLogin from "../assets/lotties/LottieLogin";
import { Button } from "../components/Button/Button";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { user, signInWithGoogle, signInWithGithub } = useAuth();

  async function handleLogin() {
    if (!user) {
      await signInWithGoogle();
    }

    ("/auau");
  }

  return (
    <section className="login">
      <div className="login-left-content container">
        <LottieLogin />
      </div>
      <div className="login-right-content">
        <form action="">
          <Button className="signInWithGoogle" onClick={handleLogin}>
            <GoogleIcon /> Entrar com Google
          </Button>
          <Button className="signInWithGithub" onClick={signInWithGithub}>
            <GithubIcon /> Entrar com Github
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
