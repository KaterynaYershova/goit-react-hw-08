import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ contact }) => (
        <li key={contact.id}>
          <Contact name={contact.name} phone={contact.phone} />
        </li>
      ))}
    </ul>
  );
};
