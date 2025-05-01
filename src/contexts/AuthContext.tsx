import { createContext, ReactNode } from "react";
import { auth } from "../services/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

type AuthContextType = {
  signInWithGoogle: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: React.PropsWithChildren) {
  const userData = auth;
  console.log(userData);

  const signInWithGoogle = async (): Promise<void> => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <AuthContext.Provider value={{ signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}
