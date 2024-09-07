import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.container}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default SearchBox;
