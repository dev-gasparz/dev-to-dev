import LottieLogin from "../assets/lotties/LottieLogin";
import { Button } from "../components/Button/Button";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <section className="login">
      <div className="login-left-content container">
        <LottieLogin />
      </div>
      <div className="login-right-content">
        <form action="">
          <Button onClick={signInWithGoogle}>Entrar com Google</Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
