import "../css/login-form.css";
import Button from "../buttons/button";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "./FireBase";
import { useState, useContext } from "react";
import { MyAuthContext } from "./context/ContextAuth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handlerChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { loginFunc } = useContext(MyAuthContext);

  const navigate = useNavigate();
  const authFunc = async (e) => {
    e.preventDefault();
    try {
      const data = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = data.user;
      loginFunc(user);
      console.log(user);
      navigate("/home");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="login-form">
      <Toaster />
      <form onSubmit={authFunc} className="login-form__container">
        <input
          className="input-block"
          onChange={handlerChangeInput}
          name="email"
          value={formData.email}
          type="email"
          placeholder="Email"
        />
        <input
          className="input-block"
          onChange={handlerChangeInput}
          name="password"
          value={formData.password}
          type="password"
          placeholder="Password"
        />
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
