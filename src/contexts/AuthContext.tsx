import { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  signInWithGithub: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState<User>();
  const userData = auth;
  console.log(userData);
  console.log(user);

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
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = async (): Promise<void> => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const signInWithGithub = async (): Promise<void> => {
    const provider = new GithubAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signInWithGithub }}>
      {children}
    </AuthContext.Provider>
  );
}
