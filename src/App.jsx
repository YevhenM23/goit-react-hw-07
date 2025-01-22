import "./App.css";

import ContactForm from "../src/components/ContactForm/ContactForm";
import SearchBox from "../src/components/SearchBox/SearchBox";
import ContactList from "../src/components/ContactList/ContactList";

function App() {
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
