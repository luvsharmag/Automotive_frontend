import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children  }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  // const [user, setUser] = useState(null);

  const login = (tokenValue) => {
    localStorage.setItem("token", tokenValue);
    setToken(tokenValue);
  };

  const logout = (navigate) => {
    localStorage.removeItem("token");
    setToken(null);
    setTimeout(() => {  
      // navigate to home or login page after logout
      navigate("/login");
    }, 1000);
    // setUser(null);
  };


  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// AuthContext.jsx


export const useAuthWithNavigation = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  
  return {
    ...auth,
    logout: () => auth.logout(navigate)
  };
};

export const useAuth = () => useContext(AuthContext);