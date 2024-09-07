import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import styles from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const [values, setValues] = useState(initialValues);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = values;

    const isExistingContact = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExistingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          type="tel"
          name="number"
          value={values.number}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </label>
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
