import clsx from "clsx";
import { FcSearch } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import style from "../App.module.scss";
import {
  inputTaskEndDate,
  inputTaskName,
  inputTaskStartDate,
  searchTask,
} from "../store/todoTask/action";

function SearchTask() {
  const dispatch = useDispatch();
  const { name, startDate, endDate } = useSelector(
    (state) => state.TodoReducer
  );

  return (
    <div className={clsx(style.inputField)}>
      <h1>Search Task</h1>
      <input
        type="text"
        onChange={(e) => dispatch(inputTaskName(e.target.value))}
        placeholder="Add your new todo"
        value={name}
      />
      <input
        type="date"
        onChange={(e) => dispatch(inputTaskStartDate(e.target.value))}
        placeholder="Start"
        value={startDate}
      />
      <input
        type="date"
        onChange={(e) => dispatch(inputTaskEndDate(e.target.value))}
        placeholder="Deadline"
        value={endDate}
      />
      <button
        className={clsx(style.button_input)}
        onClick={() =>
          dispatch(
            searchTask({
              name,
              startDate,
              endDate,
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
