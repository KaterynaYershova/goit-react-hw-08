import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from "../../redux/contacts/selectors";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Contacts</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default ContactsPage;
