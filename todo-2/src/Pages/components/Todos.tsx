import React, { useEffect, useState } from "react";
// import { data } from "../../data";
import Todo from "./Todo";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import { TodoTypes } from "../../reducers/TodoActions";

const Todos = () => {
  const TodoActions = useSelector(
    (state: { TodoActions: TodoTypes[] }) => state.TodoActions
  );

  const [allTodos, setAllTodos] = useState<TodoTypes[]>([]);
  const [pageNumber, setPageNumber] = useState(1);

  const pageSize = 3;

  const [input, setInput] = useState("");

  // useEffect(() => {
  //   setAllTodos(TodoActions);
  // }, []);

  // useEffect(() => {
  //   setAllTodos(TodoActions);

  // }, [TodoActions]);

  useEffect(() => {
    function HandleSearch(text: any) {
      if (text?.length === 0) {
        setAllTodos(TodoActions);
      } else if (text?.length > 2) {
        setPageNumber(1);
        //123
        const abc = TodoActions?.filter((item) =>
          item.title.toLowerCase().includes(text.toLowerCase())
        );
        setAllTodos(abc);
      }
    }
    HandleSearch(input);
  }, [input]);

  function HandleSelect(e: any) {
    if (e.target.value === "Ascending") {
      const abc = [...TodoActions].sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      );

      setAllTodos(abc);
      // console.log(abc);
    } else if (e.target.value === "Descending") {
      const abc = [...TodoActions].sort((a, b) =>
        b.title.toLowerCase().localeCompare(a.title.toLowerCase())
      );
      // console.log(abc);
      setAllTodos(abc);
    } else if (e.target.value === "Date(new-to-old)") {
      const sortedData = [...TodoActions].sort((a, b) => {
        const dateA: Date = new Date(a.date);
        const dateB: Date = new Date(b.date);

        return dateB.getTime() - dateA.getTime();
      });

      setAllTodos(sortedData);
    } else if (e.target.value === "Date(old-to-new)") {
      const sortedData = [...TodoActions].sort((a, b) => {
        const dateA: Date = new Date(a.date);
        const dateB: Date = new Date(b.date);

        return dateA.getTime() - dateB.getTime();
      });

      setAllTodos(sortedData);
    }
    // console.log(allTodos);
  }

  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem("todos"));
  //   if (todos?.length > 0) {
  //     setAllTodos(todos);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(TodoActions));
  //   setAllTodos(TodoActions)
  // }, [TodoActions]);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(allTodos));
  // }, [allTodos]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") as string);
    setAllTodos(todos);
  }, [TodoActions]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") as string);
    if (todos && todos.length > 0) {
      setAllTodos(todos);
    }
  }, []);

  return (
    <>
      <div className="   py-2 w-full flex flex-row  justify-center items-center lg:px-10 ">
        <div className="  lg:w-2/3 w-full  flex flex-row justify-between lg:px-5 ">
          <div className=" flex flex-row gap-1 items-center justify-center ">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search"
              className="py-1.5 pl-1 lg:px-10 rounded-md outline-none placeholder:pl-2"
            />
            <CiSearch
              size={27}
              color="gray"
              className="hidden md:block"
              id="searchIcon"
              name="searchIcon"
            />
          </div>

          <div className=" md:px-2 hover:bg-gray-300 transition-all duration-300  rounded-md hover:cursor-pointer flex flex-row items-center justify-center gap-1">
            <span className="text-gray-500 ">Filter</span>

            <select
              onChange={(e) => HandleSelect(e)}
              name="filter"
              id="filter"
              className="outline-none py-1 rounded-md"
            >
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
              <option value={"Date(new-to-old)"}>Date(new-to-old)</option>
              <option value="Date(old-to-new)">Date(old-to-new)</option>
            </select>
            {/* <BsFilterSquare color="gray" size={16} /> */}
          </div>
        </div>
      </div>
      <div className=" lg:w-2/3 lg:px-8 space-y-4 w-full pt-5">
        {allTodos &&
          allTodos
            ?.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
            .map((item) => <Todo item={item} index={item.id} key={item.id} />)}

        <div className="w-full pb-2  ">
          <div className="space-x-1 w-full flex justify-end">
            {allTodos &&
              new Array(Math.ceil(allTodos?.length / 3))
                .fill(0)
                .map((item, index) => (
                  <button
                    id="paginationButtons"
                    onClick={() => setPageNumber(index + 1)}
                    className="  transition-all duration-300 hover:bg-gray-500 hover:text-white px-1.5 bg-gray-400 rounded-md"
                  >
                    {index + 1}
                  </button>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
