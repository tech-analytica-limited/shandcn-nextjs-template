"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { get } from "@/lib/axios/api-handler";
import { SingleUser } from "@/types/User";
import { useGet } from "@/hooks/requestHandler";

const AddingTest = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["1"],
    queryFn: () => get<SingleUser>("/userss/1"),
  });

  //   const { data, error, isLoading } = useGet<SingleUser, {}>("/users/1");

  const handleDataFetch = async () => {
    console.log(data, error, isLoading);
  };

  return (
    <div>
      <Button
        variant={"default"}
        className="bg-yellow-400"
        onClick={() => handleDataFetch()}
      >
        POST
      </Button>
    </div>
  );
};

export default AddingTest;
