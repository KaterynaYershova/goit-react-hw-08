import { Formik } from "formik";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <Formik>
        <title>Login</title>
      </Formik>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
