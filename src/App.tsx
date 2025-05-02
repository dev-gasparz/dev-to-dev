import { AuthContextProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";

function App() {
  return (
    <AuthContextProvider>
      <main>
        <Login />
      </main>
    </AuthContextProvider>
  );
}

export default App;
