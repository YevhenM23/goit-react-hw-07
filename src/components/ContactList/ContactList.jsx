import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";
// import { selectNameFilter } from "../../redux/filtersSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContact = useSelector(selectFilteredContacts);
  console.log(filteredContact);

  // const contacts = useSelector(selectContacts) || [];

  // const filter = useSelector(selectNameFilter) || "";

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const filteredData = contacts.filter((item) =>
  //   item.name.toLowerCase().includes(filter.toLowerCase())
  // );

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
