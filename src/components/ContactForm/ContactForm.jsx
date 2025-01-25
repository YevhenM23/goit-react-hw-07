import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, options) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    options.resetForm();
  };
  const orderSchema = Yup.object().shape({
    name: Yup.string().required().min(3).max(50),
    number: Yup.string().required().matches(/^\d+$/).min(3).max(50),
  });

  return (
    <Formik
      validationSchema={orderSchema}
      initialValues={{ name: "", number: "" }}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <label>
            <Field className={s.addInput} name="name" type="text" />
          </label>
          <ErrorMessage
            name="name"
            component="div"
            style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}
          />
          <label>
            <Field className={s.addInput} name="number" type="tel" />
          </label>
          <ErrorMessage
            name="number"
            component="div"
            style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}
          />
          <button className={s.btnAdd} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
