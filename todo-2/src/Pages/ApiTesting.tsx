import React, { useEffect, useState } from "react";

const ApiTesting = () => {
  const [allData, setAllData] = useState<any>();
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://fakestoreapi.com/products/");
      const data = await res.json();
      setAllData(data);
    }

    getData();
  }, []);

  return (
    <div>
      <span>Testing API</span>

      <div className="bg-gray-300 px-2 py-5 flex flex-wrap gap-12 justify-center items-center">
        {allData?.map((item: any) => (
          <div className="outline h-72 w-52 rounded-lg bg-white px-2 py-3 flex justify-center flex-col items-center">
            <div className="">
              <img src={item.image} alt={item.title} className="h-52" />
            </div>

            <span className="font-bold text-xs line-clamp-2 ">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiTesting;
