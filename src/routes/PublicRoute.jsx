import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PublicRoute({ children }) {
  const { token } = useAuth();

  if (token) {
    // If logged in, redirect to home (or dashboard)
    return <Navigate to="/" replace />;
  }

  // Not logged in, allow access to login/register page
  return children;
}
