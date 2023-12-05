import Button from "../buttons/button";
import toast, { Toaster } from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FireBase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyAuthContext } from "../component/context/ContextAuth";

const SigninForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handlerChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  /**** CONTEXT APİ ÇAĞRISI */
  const { registerFunc } = useContext(MyAuthContext);

  /**** CONTEXT APİ ÇAĞRISI */

  const authFunc = async (e) => {
    e.preventDefault();
    try {
      const data = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = data.user;
      registerFunc(user);
      toast.success("Success");

      navigate("/");
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
          name="email"
          onChange={handlerChangeInput}
          value={formData.email}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={handlerChangeInput}
          name="password"
          className="input-block"
          type="password"
          value={formData.password}
          placeholder="Password"
        />
        <Button>Sign in</Button>
      </form>
    </div>
  );
};

export default SigninForm;
