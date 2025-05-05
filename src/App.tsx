import Spinner from "./assets/icons/spinner/Spinner";
import { AuthContextProvider } from "./contexts/AuthContext";
import { useAuth } from "./hooks/useAuth";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PxToRem from "./pages/tools/PxToRem";

function AppRoutes() {
  const { user, loading } = useAuth();

  if (loading) {
    return <Spinner />;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Navigate to="/dashboard" /> : <Login />}
      />
      <Route
        path="/dashboard/px-to-rem"
        element={user ? <PxToRem /> : <Navigate to="/dashboard/px-to-rem" />}
      />
      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <main>
          <AppRoutes />
        </main>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
