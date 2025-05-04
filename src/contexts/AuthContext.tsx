import { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextType = {
  loading: boolean;
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  signInWithGithub: () => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = async (): Promise<void> => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const signInWithGithub = async (): Promise<void> => {
    const provider = new GithubAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const logout = async (): Promise<void> => {
    setLoading(true);
    await signOut(auth);
    setUser(undefined);

    // Simula carregamento por 2s antes de redirecionar
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error("Missing information from Google Account.");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
      setTimeout(() => {
        setLoading(false);
      }, 900);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signInWithGoogle, signInWithGithub, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
