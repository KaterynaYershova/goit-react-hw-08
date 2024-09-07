import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label>Name</label>
          <Field type="text" name="name" required />
          <label>Email</label>
          <Field type="email" name="email" required />
          <label>Password</label>
          <Field type="password" name="password" required />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
