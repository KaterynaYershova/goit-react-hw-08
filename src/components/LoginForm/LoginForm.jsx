import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Email
          <Field name="email" className={styles.input} />
          <ErrorMessage name="email" component="div" className={styles.error} />
        </label>
        <label className={styles.label}>
          Password
          <Field name="password" type="password" className={styles.input} />
          <ErrorMessage
            name="password"
            component="div"
            className={styles.error}
          />
        </label>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
