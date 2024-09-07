import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label>Email</label>
          <Field type="email" name="email" required />
          <label>Password</label>
          <Field type="password" name="password" required />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
