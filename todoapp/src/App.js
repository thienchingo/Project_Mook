import clsx from "clsx";
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import style from "./App.module.scss";
import Dashboad from "./components/DashBoad";
import DetailTaskPage from "./components/DetailTaskPage";
import Footer from "./components/Footer";
import InputTask from "./components/InputTask";
function App() {
  const [isActive, setIsActive] = useState(1);
  const handleOnClick = (index) => {
    setIsActive(index);
  };
  return (
    <div className={style.wrapper}>
      <header>Todo App</header>
      <nav>
        <ul>
          <li>
            <Link
              onClick={() => handleOnClick(1)}
              className={clsx({ [style.active]: 1 === isActive })}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleOnClick(2)}
              className={clsx({ [style.active]: 2 === isActive })}
              to="/input-task"
            >
              NewTask
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboad />} />
        <Route path="/details/:idTask" element={<DetailTaskPage />} />
        <Route path="/input-task" element={<InputTask />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default React.memo(App);
