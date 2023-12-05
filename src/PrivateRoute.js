import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { MyAuthContext } from "./component/context/ContextAuth";
export default function PrivateRoute({ children }) {
  const { user } = useContext(MyAuthContext);
  console.log("privite", user);
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
}
