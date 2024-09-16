import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { useEffect } from "react";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { selectIsLoading } from "../redux/contacts/selectors";
import SearchBox from "../components/SearchBox/SearchBox";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h2>Your contacts</h2>
      <ContactForm />
      <ContactList />
      <SearchBox />
      <div>{isLoading && "Request in progress..."}</div>
    </>
  );
};

export default ContactsPage;
