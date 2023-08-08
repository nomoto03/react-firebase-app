import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../firebase";
import type { User } from "@firebase/auth";
import { onAuthStateChanged } from "@firebase/auth";

export type GlobalAuthState = {
  user: User | null | undefined;
};

const initialState: GlobalAuthState = {
  user: undefined,
};

const AuthContext = createContext<GlobalAuthState>(initialState);

export const useAuthContext = () => useContext(AuthContext);

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<GlobalAuthState>(initialState);

  const value = {
    user: user.user,
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (authUser) => {
      console.log(authUser);
      setUser({
        user: authUser,
      });
    });
    return () => {
      unsubscribed();
    };
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
