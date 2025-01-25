import "./App.css";
import axios from "axios";

import ContactForm from "../src/components/ContactForm/ContactForm";
import SearchBox from "../src/components/SearchBox/SearchBox";
import ContactList from "../src/components/ContactList/ContactList";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";

axios.defaults.baseURL = "https://67911a51af8442fd73790976.mockapi.io";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
