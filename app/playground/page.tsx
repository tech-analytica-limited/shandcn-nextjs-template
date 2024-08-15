import { Button } from "@/components/ui/button";
import React from "react";
import { get } from "@/lib/axios/api-handler";
import { AllUsers, SingleUser } from "@/types/User";
import FetchingTest from "./components/FetchingTest";

const page = () => {
  // const response = await get<SingleUser>("/users/1");

  return (
    <div>
      <h3 className="text-2xl text-center uppercase py-2">API playground</h3>
      <FetchingTest />
      <div className="w-full m-4 grid grid-cols-2 ">
        <div className="px-2">
          <p className="text-xl font-semibold">Actions</p>
          <div className="flex flex-wrap gap-2 py-2">
            <Button variant={"default"}>GET</Button>
            <Button variant={"ghost"} className="bg-yellow-400">
              POST
            </Button>
            <Button variant={"outline"} className="bg-blue-300">
              PATCH
            </Button>
            <Button variant={"secondary"} className="bg-green-400">
              PUT
            </Button>
            <Button variant={"destructive"}>DELETE</Button>
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
