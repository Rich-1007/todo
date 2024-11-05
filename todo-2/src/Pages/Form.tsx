import React, { useEffect, useState } from "react";

const Form = () => {
  type inputTypes = {
    firstName: string;
    lastName: string;
    email: string;
    number: string;
  };
  const [isShow, setIsShow] = useState(false);
  const [inputData, setInputdata] = useState<inputTypes>({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
  });

  function afterSunmit(e: any) {
    e.preventDefault();

    if (inputData.firstName) {
      setInputdata({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
      });
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }

  return (
    <div className="flex  flex-col items-center pt-6">
      <span>This is a form </span>
      <form action="" onSubmit={(e) => afterSunmit(e)} role="form">
        <div className="flex flex-col bg-white px-10 py-3 rounded-lg w-96 border-2 border-gray-300">
          <div className="  flex flex-col gap-4 my-2 ">
            <div className="flex flex-row  w-full justify-between  ">
              <label htmlFor="">First Name</label>
              <input
                value={inputData.firstName}
                onChange={(e) =>
                  setInputdata({ ...inputData, firstName: e.target.value })
                }
                type="text"
                name="first Name"
                id=""
                placeholder="Enter first name"
                className="outline-none"
              />
            </div>

            <div className=" text-[10px] h-4 text-red-500">
              {isShow && <span>Please Enter First name</span>}
            </div>
          </div>

          <div className="flex flex-row gap-4 py-2  w-full justify-between  ">
            <label htmlFor="">Last name</label>
            <input
              value={inputData.lastName}
              onChange={(e) =>
                setInputdata({ ...inputData, lastName: e.target.value })
              }
              type="text"
              name="last Name"
              id=""
              placeholder="Enter last name"
              className="outline-none"
            />
          </div>
          <div className="flex flex-row gap-4 py-2  w-full justify-between  ">
            <label htmlFor="">Email</label>
            <input
              value={inputData.email}
              onChange={(e) =>
                setInputdata({ ...inputData, email: e.target.value })
              }
              type="text"
              name="email"
              id=""
              placeholder="Enter email id"
              className="outline-none"
            />
          </div>
          <div className="flex flex-row gap-4 py-2  w-full justify-between  ">
            <label htmlFor="">Number</label>
            <input
              value={inputData.number}
              onChange={(e) =>
                setInputdata({ ...inputData, number: e.target.value })
              }
              type="text"
              name="number"
              id=""
              placeholder="Enter number"
              className="outline-none"
            />
          </div>
        </div>
        <div className="flex w-full justify-end pr-6 mt-3">
          <button className="bg-green-500 hover:bg-green-700 px-4 py-1 text-white rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
