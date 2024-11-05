import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../actions";
// import { nanoid } from "nanoid";
import { TodoTypes } from "../../reducers/TodoActions";

const Input = () => {
  const generateId = () => {
    return Math.floor(Math.random() * 100000000);
  };

  const TodoActions = useSelector(
    (state: { TodoActions: TodoTypes[] }) => state.TodoActions
  );
  const dispatch = useDispatch();

  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
    date: "",
    done: false,
    id: generateId(),
  });

  // console.log(TodoActions);

  function HandleSubmit(e: any) {
    e.preventDefault();
    // console.log(inputValues);

    if (inputValues.title != "") {
      dispatch(add(inputValues));
    }

    setInputValues({
      title: "",
      description: "",
      date: "",
      done: false,
      id: generateId(),
    });
  }

  return (
    <div className="w-full flex  items-center justify-center flex-col">
      <span>Input</span>
      <div className="bg-gray-200 rounded-t-md  w-[600px] lg:px-4 flex justify-center items-center py-7 ">
        <form action="" className="w-full" onSubmit={(e) => HandleSubmit(e)}>
          <div className="flex flex-col w-full items-center gap-2">
            <input
              value={inputValues.title}
              onChange={(e) =>
                setInputValues({ ...inputValues, title: e.target.value })
              }
              type="text"
              placeholder="Enter title"
              className="px-5 rounded-md py-2 outline-none w-full"
            />
            <textarea
              value={inputValues.description}
              onChange={(e) =>
                setInputValues({ ...inputValues, description: e.target.value })
              }
              placeholder="Enter description"
              className="px-5 rounded-md py-2 outline-none w-full h-20"
            />

            <input
              value={inputValues.date}
              onChange={(e) =>
                setInputValues({ ...inputValues, date: e.target.value })
              }
              type="date"
              placeholder="Enter date"
              className="px-5 rounded-md py-2 outline-none w-full"
            />
          </div>
          <div className=" flex items-center justify-center pt-4 w-full">
            <button   className="bg-indigo-500 hover:bg-indigo-700 text-white px-3 py-1 rounded-md w-full">
              Add Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Input;
