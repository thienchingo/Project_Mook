import compare from "../../helps/utils";
import {
  ADD_TASK,
  DELETE_TASK,
  FINISHED_TASK,
  GET_STATE,
  INPUT_TASK_DESCRIPTION,
  INPUT_TASK_END_DATE,
  INPUT_TASK_NAME,
  INPUT_TASK_START_DATE,
  RESET_MESSAGE,
  VIEW_TASK,
} from "./actionType";
const initialState = {
  name: "",
  description: "",
  startDate: "",
  endDate: "",
  id: "",
  error: {},
  tasks: [],
  finalTasks: [],
  expridedTask: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATE:
      return state;
    case INPUT_TASK_NAME:
      state = {
        ...state,
        name: action.payload,
      };
      return state;
    case INPUT_TASK_DESCRIPTION:
      state = {
        ...state,
        description: action.payload,
      };
      return state;
    case INPUT_TASK_START_DATE:
      state = {
        ...state,
        startDate: action.payload,
      };
      return state;
    case INPUT_TASK_END_DATE:
      state = {
        ...state,
        endDate: action.payload,
      };
      return state;
    case RESET_MESSAGE:
      state = {
        ...state,
        error: {},
      };
      return state;
    case VIEW_TASK:
      const task = state.tasks.filter((ts) => ts.id === action.payload);
      console.log({ mytask: task });
      if (task) {
        state = {
          ...state,
          name: task[0].name,
          description: task[0].description,
          startDate: task[0].startDate,
          endDate: task[0].endDate,
          id: task[0].id,
        };
      }
      return state;
    case ADD_TASK:
      if (
        action.payload.name === "" ||
        action.payload.startDate === "" ||
        action.payload.endDate === ""
      ) {
        const error = {
          name: "Task name invalid",
          startDate: "Start date is required",
          endDate: "End date is required",
        };
        return { ...state, error };
      }
      const date1 = new Date(action.payload.startDate);
      const date2 = new Date(action.payload.endDate);
      if (date2.getTime() < date1.getTime()) {
        return {
          ...state,
          error: {
            endDate: "End date cannot less than start date!",
          },
        };
      }
      const task2 = state.tasks.filter((ts) => ts.id !== action.payload.id);
      if (task2 && task2.length < state.tasks.length) {
        const newTasks = [...task2, action.payload];

        state = {
          ...state,
          tasks: newTasks.sort(compare),
          name: action.payload.name,
          description: action.payload.description,
          startDate: action.payload.startDate,
          endDate: action.payload.endDate,
          id: action.payload.id,
          error: {
            successed: "Edit task completed!",
          },
        };
        return state;
      }
      state = {
        ...state,
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        tasks: [...state.tasks, action.payload].sort(compare),
        error: {
          successed: "Add task complete!",
        },
      };
      return state;
    case DELETE_TASK:
      const targetTask = state.tasks.filter((i) => i.id !== action.payload);
      return (state = {
        ...state,
        tasks: targetTask.sort(compare),
        error: {
          successed: `You have been deleted task id ${action.payload}!`,
        },
      });
    case FINISHED_TASK:
      let inprogressTask = state.tasks.filter((i) => i.id !== action.payload);
      const finishTask = state.tasks.filter((i) => i.id === action.payload);
      return (state = {
        ...state,
        tasks: inprogressTask.sort(compare),
        finalTasks: [...state.finalTasks, ...finishTask].sort(compare),
        error: {
          successed: `Task id ${action.payload} had been finished!`,
        },
      });
    default:
      return (state = { ...state });
  }
};
export default TodoReducer;
