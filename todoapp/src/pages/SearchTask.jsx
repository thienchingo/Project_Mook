import clsx from "clsx";
import { FcSearch } from "react-icons/fc";
import { HiPencilAlt } from "react-icons/hi";
import { IoTrashBinSharp } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "../App.module.scss";
import {
  deleteTask,
  finishedTask,
  inputSearchEndDate,
  inputSearchName,
  inputSearchStartDate,
  searchTask,
} from "../store/todoTask/action";

function SearchTask() {
  const dispatch = useDispatch();
  const { searchKey, searchResult, error } = useSelector(
    (state) => state.TodoReducer
  );
  const { keyName, keyStartDate, keyEndDate } = searchKey;
  console.log({searchResult,searchKey});
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
      <ul className={clsx(style.todoList)}>
        <span
          style={{ color: "green", display: "inline-block", marginLeft: 7 }}
        >
          {error.successed}
        </span>
        <h2>Results</h2>
        {searchResult &&
          searchResult.map((task) => {
            return (
              <li
                style={{ backgroundColor: "rgb(179 141 229 / 26%)" }}
                key={task.id}
              >
                {task.name}
                <span>
                  <Link>
                    <button onClick={() => dispatch(deleteTask(task.id))}>
                      <IoTrashBinSharp />
                    </button>
                  </Link>
                </span>
                <span>
                  <Link to={`/details/${task.id}`}>
                    <button>
                      <HiPencilAlt />
                    </button>
                  </Link>
                </span>
                <span>
                  <Link>
                    <button onClick={() => dispatch(finishedTask(task.id))}>
                      <TiTickOutline />
                    </button>
                  </Link>
                </span>
              </li>
            );
          })}
        {searchResult && <li>{`You have ${searchResult.length} result!`}</li>}
      </ul>
    </div>
  );
}
export default SearchTask;
