import React from "react";
import Input from "./components/Input";
import Todos from "./components/Todos";
import Testing from "../Testing";
import Form from "./Form";
import ApiTesting from "./ApiTesting";
import NewApiTest from "./NewApiTest";

const Home = () => {
  return (
    <>
      <div className="bg-gray-200 pt-1 pb-12 px-2 flex flex-col justify-center items-center w-full">
        <span className="font-bold text-xl">Todo List</span>

       <Input />
        <Todos /> 
        {/* <Form /> */}

        {/* <ApiTesting /> */}

        {/* <Testing /> */}

        {/* <NewApiTest /> */}
      </div>
    </>
  );
};

export default Home;
