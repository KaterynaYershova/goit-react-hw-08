import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { fetchContacts } from "../redux/contacts/operations";
import { selectIsLoading } from "../redux/contacts/selectors";
import ContactList from "../components/ContactList/ContactList";
import ContactEditor from "../../components/ContactEditor/ContactEditor";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Formik>
        <title>Your contacts</title>
      </Formik>
      <ContactEditor />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList />
    </>
  );
}
