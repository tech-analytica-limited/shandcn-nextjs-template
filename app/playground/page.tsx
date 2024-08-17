import React from "react";
import FetchingTest from "./components/FetchingTest";
import AddingTest from "./components/AddingTest";
import Counter from "./components/Counter";
import Forms from "./components/Forms";

const page = () => {
  // const response = await get<SingleUser>("/users/1");

  return (
    <div>
      <h3 className="text-2xl text-center uppercase py-2">API playground</h3>
      <Forms />
      <Counter />
      <div className="w-full m-4 grid grid-cols-2 ">
        <div className="px-2">
          <p className="text-xl font-semibold">Actions</p>
          <div className="flex flex-wrap gap-2 py-2">
            <FetchingTest />
          </div>
        </div>
        <div className="w-full bg-[#1A4870] text-white p-2">
          <p className="text-xl font-semibold">Response</p>
          <div className="">Response will be shown here</div>
        </div>
      </div>
    </div>
  );
};

export default page;
