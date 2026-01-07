import React from "react";

const Login = () => {
  const { Login } = useContext(AuthContext);
  const Navigate = useNavigate();
  const handleLogin = () => {
    Login("Ram"); //set user
    Navigate("/dashboard"); //redirect to dashboard
  };

  return (
    <div>
      <h3>Login Page</h3>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default Login;
