import { AuthContextProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";

function App() {
  return (
    <AuthContextProvider>
      <body>
        <Login />
      </body>
    </AuthContextProvider>
  );
}

export default App;
