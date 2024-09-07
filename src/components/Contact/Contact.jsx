import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log("Deleting contact with ID:", id);
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contactItem}>
      <p className={styles.contactText}>
        {name}: <span className={styles.contactNumber}>{number}</span>
      </p>
      <button onClick={handleDelete} className={styles.deleteButton}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
