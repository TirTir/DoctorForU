import { createContext, useContext, useState, useMemo } from "react";

export const IsLoginContext = createContext();

export function IsLoginProvider({ children }) {
  const [userId, setUserId] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  
  const value = useMemo(() => ({
    userId, setUserId, isLogin, setIsLogin
  }), [userId, isLogin]);

  return (
    <IsLoginContext.Provider value={value}>{children}</IsLoginContext.Provider>
  );
}

export function useGetIsLogin() {
  const context = useContext(IsLoginContext);
  if (!context) {
    throw new Error("Cannot find ContextProvider");
  }
  return { userId: context.userId, setUserId: context.setUserId, isLogin: context.isLogin, setIsLogin: context.setIsLogin };
}