import { FC } from "react";
import { useNavigate } from "react-router-dom";
const Login: FC = (): JSX.Element => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/dashboard")}>Login</button>;
};

export default Login;
