import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { MdAutoDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { deletes, ISDONE } from "../../actions";
import Edit from "./Edit";

const Todo = ({ item, index }: { item: any; index: any }) => {
  const [istrue, setIstrue] = useState(false);
  const [isDone, setIsDone] = useState();
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState(false);

  function HandleIsDone(e: any, id: string) {
    setIsDone(e.target.checked);

    dispatch(ISDONE(e.target.checked, id));
  }

  function HandelDelete(id: string) {
    dispatch(deletes(id));
    // console.log(id);
  }
  function HandelEdit(id: string) {
    // console.log(id);
    setShowEdit((prev) => !prev);
  }
  return (
    <>
      <div
        key={index}
        className="bg-blue-200 hover:bg-blue-300 transition-all duration-300 rounded-lg px-1"
      >
        <span className="text-gray-500 text-[11px]">{item.date}</span>

        <div className="  py-1 px-2 flex flex-row justify-between">
          <div
            className={`flex flex-row justify-between   items-center gap-2 py-1 ${
              item.done ? "line-through text-gray-500" : ""
            } `}
          >
            <span>{item.title}</span>
           
           
           
            <button data-testid="ArrowDropdownButton">
              <IoIosArrowDropdown
                onClick={() => setIstrue((prev) => !prev)}
                className="text-gray-700 hover:cursor-pointer"
                size={20}
              />
            </button>



          </div>

          <div className=" flex flex-row justify-between items-center gap-2  text-gray-700">
            <div>
              <input
                type="checkbox"
                // value={isDone}
                onChange={(e) => HandleIsDone(e, item.id)}
                checked={item.done}
              />
            </div>
            <div
              onClick={() => HandelEdit(item.id)}
              className=" hover:bg-blue-400 px-3 py-1 rounded-lg "
            >
              <FaEdit size={20} />
            </div>
            <div
              onClick={() => HandelDelete(item.id)}
              className=" hover:bg-blue-400 px-3 py-1 rounded-lg "
            >
              <MdAutoDelete size={20} />
            </div>
          </div>
        </div>

        <div
          className={`${
            istrue
              ? " border-t-2 border-blue-400 max-h-52 overflow-hidden transition-all duration-700"
              : " border-t-2  max-h-0 overflow-hidden transition-all duration-700"
          }`}
        >
          <p className="py-3   text-xs text-gray-500 ">{item.description}</p>
        </div>
      </div>

      <div className="w-full flex items-center justify-center ">
        <Edit
          item={item}
          //123
          showEdit={showEdit}
          setShowEdit={setShowEdit}
          id={item.id}
        />
      </div>
    </>
  );
};

export default Todo;
