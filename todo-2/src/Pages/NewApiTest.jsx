import React, { useEffect, useState } from "react";

const NewApiTest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await result.json();
    setData(data);
  };

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewApiTest;
