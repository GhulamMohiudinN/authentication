import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token") !== null;
    if (!isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return;
};

export default useAuth;
