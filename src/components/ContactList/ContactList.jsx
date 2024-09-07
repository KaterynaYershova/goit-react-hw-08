import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}
        </li>
      ))}
    </ul>
  );
};
