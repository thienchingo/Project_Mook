import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "../App.module.scss";
import { HiPencilAlt } from "react-icons/hi";
import { IoTrashBinSharp } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";
import {
  autoCheckExpridedTask,
  deleteTask,
  finishedTask,
  resetMessage,
} from "./../store/todoTask/action";
import { useEffect } from "react";
import { isEmpty } from "lodash";
function DashBoad() {
  const dispatch = useDispatch();
  const { tasks, error, finalTasks, expridedTask } = useSelector(
    (state) => state.TodoReducer
  );
  useEffect(() => {
    console.log({ task: tasks, error: error, dispatch });
    const timerId = setTimeout(() => {
      if (!isEmpty(error)) {
        dispatch(resetMessage());
      }
    }, 1000);
    return () => clearTimeout(timerId);
  }, [tasks, error, dispatch]);
  useEffect(() => {
    dispatch(autoCheckExpridedTask());
  }, [tasks]);
  console.log({ final: finalTasks });
  return (
    <ul className={clsx(style.todoList)}>
      <span style={{ color: "green", display: "inline-block", marginLeft: 7 }}>
        {error.successed}
      </span>
      <h2>Inprogress task</h2>
      {tasks &&
        tasks.map((task) => {
          return (
            <li style={{backgroundColor:"rgb(179 141 229 / 26%)"}} key={task.id}>
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
      {tasks && <li>{`You have ${tasks.length} inprogress task!`}</li>}
      <hr />
      <h2>Completed task:</h2>
      {finalTasks &&
        finalTasks.map((task) => {
          return (
            <li style={{ backgroundColor: "#a2e7a2" }} key={task.id}>
              {task.name}
            </li>
          );
        })}
      {finalTasks && <li>{`You have ${finalTasks.length} completed task!`}</li>}
      <hr />
      <h2>Exprided Task:</h2>
      {expridedTask &&
        expridedTask.map((task) => {
          return (
            <li style={{ backgroundColor: "#cfaaa6" }} key={task.id}>
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
      {expridedTask && (
        <li>{`You have ${expridedTask.length} exprided task!`}</li>
      )}
    </ul>
  );
}
export default DashBoad;
