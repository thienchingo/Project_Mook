import clsx from "clsx";
import { FcSearch } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import style from "../App.module.scss";
import {
  inputSearchEndDate,
  inputSearchName,
  inputSearchStartDate,
  searchTask,
} from "../store/todoTask/action";

function SearchTask() {
  const dispatch = useDispatch();
  const { searchKey } = useSelector((state) => state.TodoReducer);
  const { keyName, keyStartDate, keyEndDate } = searchKey;
  console.log(searchKey);
  return (
    <div className={clsx(style.inputField)}>
      <h1>Search Task</h1>
      <input
        type="text"
        onChange={(e) => dispatch(inputSearchName(e.target.value))}
        placeholder="Add your new todo"
        value={keyName}
      />
      <input
        type="date"
        onChange={(e) => dispatch(inputSearchStartDate(e.target.value))}
        placeholder="Start"
        value={keyStartDate}
      />
      <input
        type="date"
        onChange={(e) => dispatch(inputSearchEndDate(e.target.value))}
        placeholder="Deadline"
        value={keyEndDate}
      />
      <button
        className={clsx(style.button_input)}
        onClick={() =>
          dispatch(
            searchTask({
              keyName,
              keyStartDate,
              keyEndDate,
            })
          )
        }
      >
        <FcSearch />
      </button>
    </div>
  );
}
export default SearchTask;
