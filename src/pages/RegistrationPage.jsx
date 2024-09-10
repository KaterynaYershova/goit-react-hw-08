import { Formik } from "formik";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div>
      <Formik>
        <title>Registration</title>
      </Formik>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
