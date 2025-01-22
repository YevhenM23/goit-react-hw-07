import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts) || [];
  const filter = useSelector(selectNameFilter) || "";
  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredData.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
