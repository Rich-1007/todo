import React, { useEffect, useState } from "react";
import { EDIT } from "../../actions";
import { useDispatch } from "react-redux";

// const formateDate = (date: any) => {
//   const newDate = new Date(date);
//   const month =
//     newDate.getMonth() < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth();

//   const day =
//     newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
//   const str = newDate.getFullYear().toString() + "-" + month + "-" + day;

//   return str;
// };

const Edit = ({
  item,
  showEdit,
  setShowEdit,
  id,
}: {
  item: any;
  showEdit: any;
  setShowEdit: any;
  id: string;
}) => {
  const dispatch = useDispatch();

  // console.log(item);

  const [updatesInput, setUpdatesInput] = useState(item);
  //123

  useEffect(()=> {
    
  },[])
  

  function HandleUpdate() {
    setShowEdit((prev: boolean) => !prev);

    if (updatesInput.title != "") {
      dispatch(EDIT(updatesInput));
    }
    setUpdatesInput({
      title: updatesInput.title,
      description: updatesInput.description,
      date: updatesInput.date,
      done: false,
      id: id,
    });
  }
  return (
    <>
      <div
        className={`px-5 w-full  bg-indigo-600 rounded-lg  duration-700 transition-all overflow-hidden
        ${showEdit ? " py-8  max-h-60 " : "max-h-0 overflow-hidden  "}
        `}
      >
        <div className="  flex flex-col w-full justify-center items-center ">
          <input
            value={updatesInput?.title}
            onChange={(e) =>
              setUpdatesInput({ ...updatesInput, title: e.target.value })
            }
            type="text"
            placeholder="Enter title to edit"
            className="py-1 px-4 rounded-t-lg w-2/3 outline-none"
          />

          <textarea
            value={updatesInput?.description}
            onChange={(e) =>
              setUpdatesInput({ ...updatesInput, description: e.target.value })
            }
            name=""
            id=""
            placeholder="Enter description to edit"
            className="py-1 px-4 w-2/3 h-16  outline-none"
          />
          <input
            placeholder="Enter date to edit"
            value={updatesInput?.date}
            onChange={(e) =>
              setUpdatesInput({ ...updatesInput, date: e.target.value })
            }
            type="date"
            className="py-1 px-4 rounded-b-lg w-2/3 outline-none"
          />
        </div>
        <div className="flex justify-center items-center pt-5">
          <button
            onClick={() => HandleUpdate()}
            className="w-52 bg-white py-2 hover:bg-gray-200 rounded-lg text-indigo-600 font-bold"
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default Edit;
