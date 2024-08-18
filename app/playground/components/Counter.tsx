"use client";
import { Button } from "@/components/ui/button";
import { useCounterStore } from "../../../provider/counter-store-provider";
import React from "react";
import { useCounterStorePersist } from "@/store/store";

const Counter = () => {
  const { count, increment, decrement } = useCounterStorePersist(
    (state) => state
  );

  return (
    <div className="flex gap-4 items-center">
      <Button onClick={increment}> + Add</Button>
      <p>Counter: {count}</p>
      <Button onClick={decrement}> - Remove</Button>
    </div>
  );
};

export default Counter;
