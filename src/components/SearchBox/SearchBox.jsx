import { Field, Form, Formik } from "formik";
import s from "./Search.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <Formik>
      {() => (
        <Form>
          <label className={s.searchInput}>
            <span className={s.searchText}>Find contacts by name</span>
            <Field
              id="search"
              name="search"
              type="text"
              onChange={(e) => dispatch(changeFilter(e.target.value))}
            ></Field>
          </label>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBox;
