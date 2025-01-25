import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";
// import { useEffect } from "react";
// import { fetchContacts } from "../../App";

const ContactList = () => {
  // const dispatch = useDispatch();
  const filteredContact = useSelector(selectFilteredContacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  return (
    <ul>
      {filteredContact.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
      {isError && <h2>Something went wrong.No Contacts found.</h2>}
      {isLoading && <h2>Loading...</h2>}
    </ul>
  );
};

export default ContactList;
