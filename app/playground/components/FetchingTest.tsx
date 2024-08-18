"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { del, get, post, put } from "@/lib/api/handlers";
import { SingleUser } from "@/types/User";
import { Input } from "@/components/ui/input";
import { LogIn } from "@/lib/api/tokenManager";

const FetchingTest = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["123"],
    queryFn: () => del("/users/2234234234234"),
    enabled: false,
    staleTime: 0,
    retry: 0,
  });
  // const { data, error, isLoading, refetch } = useQuery({
  //   queryKey: ["12"],
  //   queryFn: () => get<SingleUser>("/users/12"),
  //   enabled: false,
  //   staleTime: 0,
  //   retry: 0,
  // });

  const handleDataFetch = () => {
    refetch();
  };

  return (
    <div>
      <Button
        disabled={isLoading}
        variant={"default"}
        // onClick={() => refetch()}
        onClick={handleDataFetch}
      >
        GET
      </Button>

      {/* {data && <div>{data}</div>} */}
      {error && <div>{error.name}</div>}
    </div>
  );
};

export default FetchingTest;
