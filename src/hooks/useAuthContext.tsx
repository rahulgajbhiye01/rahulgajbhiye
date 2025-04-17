"use client";

import { createContext, useState, useContext } from "react";
import { IUser } from "@/types";

interface IAuthContext {
  currentUser: IUser;
  saveCurrentUser: ({ email, password }: IUser) => void;
}

const AuthContext = createContext<IAuthContext>({
  currentUser: { email: "", password: "" },
  saveCurrentUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<IUser>({
    email: "",
    password: "",
  });

  const saveCurrentUser = ({ email, password }: IUser) => {
    setCurrentUser({ email, password });
  };

  return (
    <AuthContext.Provider value={{ currentUser, saveCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
