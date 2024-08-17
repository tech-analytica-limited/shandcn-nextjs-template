"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { get } from "@/lib/axios/api-handler";
import { SingleUser } from "@/types/User";
import { Input } from "@/components/ui/input";

const FetchingTest = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["12"],
    queryFn: () => get<SingleUser>("/users/12"),
    enabled: false,
    staleTime: 0,
    retry: 0,
  });

  const handleDataFetch = () => {
    refetch();
  };

  return (
    <div>
      <Button
        disabled={isLoading}
        variant={"default"}
        onClick={handleDataFetch}
      >
        GET
      </Button>

      {data && <div>{data.firstName}</div>}
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default FetchingTest;
