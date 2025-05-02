import { createContext, ReactNode } from "react";
import { auth } from "../services/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

type AuthContextType = {
  signInWithGoogle: () => Promise<void>;
  signInWithGithub: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: React.PropsWithChildren) {
  const userData = auth;
  console.log(userData);

  const signInWithGoogle = async (): Promise<void> => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const signInWithGithub = async (): Promise<void> => {
    const provider = new GithubAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <AuthContext.Provider value={{ signInWithGoogle, signInWithGithub }}>
      {children}
    </AuthContext.Provider>
  );
}
